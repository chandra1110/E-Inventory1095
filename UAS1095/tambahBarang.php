<?php
	include_once "koneksi.php";
	$data = json_decode(file_get_contents('php://input'), true);
	$kodeBarang=$data['kodeBarang'];
	$namaBarang=$data['namaBarang'];
	$produsen=$data['produsen'];
	$stok=$data['stok'];
	$foto=$data['image'];
	$kodeDetail=$data['kodeDetail'];
	
	$sql = "insert into barang(kodeBarang, namaBarang, produsen,  stok, foto, kodeDetail) values('$kodeBarang', '$namaBarang', '$produsen',  '$stok', '$foto',  '$kodeDetail')";
	
	$info=array();
	$info['sql']=$sql;
	if (mysqli_query($koneksi, $sql)) {
		$info['success'] =1;
		$info['detail'] = 'success';
	} else {
		$info['success'] =0;
		$info['detail'] =mysqli_error($koneksi);
	}
	mysqli_close($koneksi);
	echo json_encode($info);
?> 