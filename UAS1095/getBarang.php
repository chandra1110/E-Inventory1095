<?php 
	header("Content-type: application/json; charset=ISO-8859-1");
	include_once "koneksi.php";
	$sql = "select * from barang";
	$query = mysqli_query($koneksi, $sql);
	$arrBarang = array();
	while ($row = mysqli_fetch_array($query)){
		$arrBarang[] = $row;
	}
	echo json_encode($arrBarang );
	mysqli_close($koneksi);
 ?>