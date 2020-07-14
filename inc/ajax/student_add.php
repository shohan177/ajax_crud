<?php 
	require_once "../../app/db.php";
	require_once "../../app/function.php";
	
	//value recive
	$name = $_POST['name'];
	$email = $_POST['email'];
	$cell = $_POST['cell'];
	$photo = $_FILES['photo'];

	//photo send to data base an file 
	$data = fileUp($photo,'../../media/student/');
	$photo_name = $data['file_name'];


	$sql = "INSERT INTO students (name,email,cell,photo) VALUES ('$name','$email','$cell','$photo_name')";
	$connection -> query($sql);

	echo '<p class = "alert alert-success">data update sucessfully <button class="close" data-dismiss = "alert">&times;</button></p>';
 ?>