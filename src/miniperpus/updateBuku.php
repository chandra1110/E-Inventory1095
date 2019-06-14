<?php
	include_once "koneksi.php";
	$data = json_decode(file_get_contents('php://input'), true);
	$buku_kode=$data['buku_kode'];
	$buku_judul=$data['buku_judul'];
	$penulis=$data['penulis'];
	$penerbit=$data['penerbit'];
	$sinopsis=$data['sinopsis'];
	$kategori_id=$data['kategori_id'];
	$sql = "update buku set buku_judul='$buku_judul', penulis='$penulis', penerbit='$penerbit', sinopsis='$sinopsis', kategori_id='$kategori_id' where buku_kode='$buku_kode'";
	
	
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