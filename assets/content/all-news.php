<?php
 // $news = file_get_contents('all-news.json');

 // Blocks count, page count
 $nBlocks  	= isset($_GET['blocks']) ? $_GET['blocks'] : 3;
 $nPages 	= isset($_GET['pages'])  ? $_GET['pages']  : 1;
 $domain	= isset($_GET['domain']) ? $_GET['domain'] : 'https://en.idcgames.com/';

 $news = file_get_contents($domain.'assets/content/all-news.json');

 $news = json_decode($news);

 //return only recent news
 if( !empty($news->global->recent) ){
 	$buff = [];
 	for ($i = ($nPages-1)*$nBlocks; $i < $nPages*$nBlocks ; $i++) { 

 		if(!empty($news->global->recent[$i])){
 			array_push($buff, $news->global->recent[$i]);
 		} 		
 	}

 	echo json_encode($buff);

 }else{
	print('');
 }

die();