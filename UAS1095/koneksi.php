<?php
$server = "localhost";
$user = "Chandra1095_";
$pass = "chandra1999";
$db = "id9849942_uas1095";
$koneksi = mysqli_connect($server,$user,$pass,$db);
mysqli_set_charset($koneksi,'utf8');
if(mysqli_connect_errno()){
	echo 'Gagal melakukan koneksi ke Database : '.mysqli_connect_error();
}else{
}
?>