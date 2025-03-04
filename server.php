<?php
$_POST = json_decode(file_get_contents("php://input"), true); // JSON
echo var_dump($_POST);

// FormData
// <?php
// echo var_dump($_POST);