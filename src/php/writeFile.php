<?php

$usersFile = "../data/users.json";

$username = $_GET['u'];
$email = $_GET['e'];
$password = $_GET['p'];

if(file_exists($usersFile) && isset($username) && isset($email) && isset($password)){
  $newData = ['username' => $username, 'email' => $email, 'password' => $password];
  $data = json_decode(file_get_contents($usersFile));
  if($data != null){
    array_push($data, $newData);
  } else {
    $data = $newData;
  }
  $dataJson = json_encode($data);

  $writeData = file_put_contents($usersFile, $dataJson, JSON_PRETTY_PRINT);
  if($writeData){
    header('Location:../../?s=send');
  } else {
    header('Location:../../?s=error');
  }
} else {
  header('Location:../../?s=error');
}