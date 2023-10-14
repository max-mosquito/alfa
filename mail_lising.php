<?php

$recepient = "whjaa@yea.ru";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \n Email: $email \n Телефон: $phone";

$pagetitle = "Заявка ЛИЗИНГ c cайта Альфа Сервис";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>