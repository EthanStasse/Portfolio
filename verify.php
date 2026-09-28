<?php
header('Content-Type: application/json');

$secret = '6LdvhtMtAAAAAKSNcKhMHNEexfPcSBM32-VRgbpd';
$token  = $_POST['g-recaptcha-response'] ?? '';

function post($url, $data, $headers = []) {
  $ch = curl_init($url);
  curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query($data),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => $headers,
  ]);
  $body = curl_exec($ch);
  $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);
  return [$code, $body];
}

// 1. Vérifier le captcha auprès de Google
[, $body] = post('https://www.google.com/recaptcha/api/siteverify', [
  'secret'   => $secret,
  'response' => $token,
  'remoteip' => $_SERVER['REMOTE_ADDR'],
]);
$result = json_decode($body, true);

if (empty($result['success'])) {
  http_response_code(403);
  echo json_encode(['ok' => false, 'error' => 'captcha invalide']);
  exit;
}

// 2. Transmettre à Formspree
[$code] = post('https://formspree.io/f/xwlpwdwz', [
  'nom'     => $_POST['nom'] ?? '',
  'email'   => $_POST['email'] ?? '',
  'message' => $_POST['message'] ?? '',
], ['Accept: application/json']);

http_response_code($code === 200 ? 200 : 502);
echo json_encode(['ok' => $code === 200]);