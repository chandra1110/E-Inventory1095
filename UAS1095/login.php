<?php
	header("Content-type: application/json; charset=ISO-8859-1");
	include 'koneksi.php';
	$data = json_decode(file_get_contents('php://input'), true);
	$username = $data['username'];
	$password = $data['password'];
	$status = array();
	$sql = "select * from user where username = '$username' and password = '$password' ";
	$check = mysqli_fetch_array(mysqli_query($koneksi,$sql)); //mengambil data di tabel dijadikan json
		if(isset($check)){
			$status['pesan']='Login Berhasil!';
			$status=$check;
			print json_encode($status);
		}
		else{
			$status['pesan'] = 'username atau password salah' ;
			print json_encode($status);
		}
mysqli_close($koneksi);
?>