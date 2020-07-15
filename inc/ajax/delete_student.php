<?php 	 

require_once "../../app/db.php";
require_once "../../app/function.php";

$id = $_POST['id'];


 $sql = "DELETE FROM students WHERE id='$id'";
 $connection -> query($sql);



?>