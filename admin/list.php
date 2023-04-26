<?php
$file = "C:\Users\axelm\Desktop\countdown\src\data\dates.json";

function displayList(){
  global $file;
  $id = 0;
  $data = file_get_contents($file);
  $data = json_decode($data, true);
  foreach($data as $date){
    $active = $date['active'] != true ? "N" : "Y";
    echo '<tr><th>'.$id.'</th><td>'.$date["date"].'</td><td>'.$date["reason"].'</td><td>'.$active.'</td><td class="delete-btn" data-id="'.$id.'"><i class="ri-delete-bin-fill"></i></td></tr>';
    $id++;
  }
}