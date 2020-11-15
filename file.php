<?php

function isPassword1($userPassword,$userId) {
  // $sql = "select pass from tb_user where id='".$userId."'";
  $sql = password_hash("testing123", PASSWORD_BCRYPT);
  $isTrue = password_verify($userPassword, $sql);
  echo json_encode($isTrue);
}