<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

if (isset($_POST['subscribe'])) {
// Переменные, которые отправляет пользователь
$email = $_POST['email'];

// Формирование самого письма
$title = "Новaя подписка Universal";
$body = "
<h2>Новaя подписка на рассылку</h2>
<b>E-mail:</b> $email<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'besttour.plan@gmail.com'; // Логин на почте
    $mail->Password   = 'B3fI9jd1'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('besttour.plan@gmail.com', 'Best Tour Plan Admin'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('pl.hancharou@gmail.com');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";}
    else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
} else if (isset($_POST['appeal'])) {
  // Переменные, которые отправляет пользователь
  $message = $_POST['message'];

    // Формирование самого письма
  $title = "Новое обращение Universal";
  $body = "
  <h2>Новое обращение</h2>
  <b>Имя:</b> user<br>
  <b>Сообщение:</b><br>$message
  ";

  // Настройки PHPMailer
  $mail = new PHPMailer\PHPMailer\PHPMailer();
  try {
      $mail->isSMTP();
      $mail->CharSet = "UTF-8";
      $mail->SMTPAuth   = true;
      // $mail->SMTPDebug = 2;
      $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

      // Настройки вашей почты
      $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
      $mail->Username   = 'besttour.plan@gmail.com'; // Логин на почте
      $mail->Password   = 'B3fI9jd1'; // Пароль на почте
      $mail->SMTPSecure = 'ssl';
      $mail->Port       = 465;
      $mail->setFrom('besttour.plan@gmail.com', 'Best Tour Plan Admin'); // Адрес самой почты и имя отправителя

      // Получатель письма
      $mail->addAddress('pl.hancharou@gmail.com');

      // Отправка сообщения
      $mail->isHTML(true);
      $mail->Subject = $title;
      $mail->Body = $body;

  // Проверяем отравленность сообщения
  if ($mail->send()) {$result = "success";}
  else {$result = "error";}

  } catch (Exception $e) {
      $result = "error";
      $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
  }
}