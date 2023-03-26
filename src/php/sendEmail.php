<?php

$from = "noreply@axelmarcial.com";
$to = $_GET['e'];
$subject = "TIME - Password reset";
$content = "Click on this link to reset your password.\n\n$link";
$headers = "From: $from\n";
$mail = mail($to, $subject, $content, $headers);
if($mail){
  header('Location:../../?f=send');
} else {
  header('Location:../../?f=error');
}