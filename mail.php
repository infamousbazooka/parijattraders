<?php
  require_once "Mail.php";
  $from = $_POST["email"];

  $name = $_POST["name"];
  $cno = $_POST["cno"];
  $email = $_POST["email"];
  $info = $_POST["info"];
  $message = $_POST["message"];

  $to = "magnusfernandes1295@hotmail.com";
  $subject = "Hi!";
  $body = "Name: " + $name + " Contactno: " + $cno + " Email: " + $email + " How did you hear about us?: " + $info + " Message: " + $message;
  $host = "smtp.gmail.com";
  $port = "465";
  $username = "magnusfernandes1295@gmail.com";
  $password = "vodafone3g";
  $headers = array ('From' => $from,   'To' => $to,   'Subject' => $subject);
  $smtp = Mail::factory('smtp',   array ('host' => $host,     'port' => $port,     'auth' => true,     'username' => $username,     'password' => $password));
  $mail = $smtp->send($to, $headers, $body);
  if (PEAR::isError($mail)) {
    echo("<p>" . $mail->getMessage() . "</p>");
  }
  else {
    echo("<p>Message successfully sent!</p>");
  }
?>