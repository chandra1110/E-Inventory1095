<?php 
	header("Content-type: application/json; charset=ISO-8859-1");
	include_once "koneksi.php";
	$kategori_id=$_GET['kategori_id'];
	$sql = "select * from kategori where kategori_id='$kategori_id'";
	$query = mysqli_query($koneksi, $sql);
	$arrBuku = array();
	while ($row = mysqli_fetch_array($query)){
		$arrBuku[] = $row;
	}
	echo json_encode($arrBuku );
	mysqli_close($koneksi);
 ?>