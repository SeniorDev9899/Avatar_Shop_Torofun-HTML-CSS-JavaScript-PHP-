<?php 
session_start();
define('__LOCAL_DIR__','../cdn/');

$x = '480';
$y = '600';

$final_img = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/base_final.png'); 
$image_base = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/'.$_GET['gender'].'/body/'.$_GET['tono'].'.png');
$image_f = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/'.$_GET['gender'].'/face/f'.$_GET['f'].'.png');
$image_h = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/'.$_GET['gender'].'/hair/'.$_GET['color'].'/h'.$_GET['h'].'.png');
$image_sho = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/boy/shorts/sho'.$_GET['sho'].'.png');
$image_t = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/'.$_GET['gender'].'/trousers/t'.$_GET['t'].'.png');
$image_s = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/'.$_GET['gender'].'/shoes/s'.$_GET['s'].'.png');
$image_sk = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/girl/skirt/sk'.$_GET['sk'].'.png');
$image_d = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/girl/dress/d'.$_GET['d'].'.png');
$image_sh = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/'.$_GET['gender'].'/shirt/sh'.$_GET['sh'].'.png');
$image_j = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/'.$_GET['gender'].'/jacket/j'.$_GET['j'].'.png');
$image_b = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/boy/beard/'.$_GET['color'].'/b'.$_GET['b'].'.png');
$image_a = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/'.$_GET['gender'].'/accesories/a'.$_GET['a'].'.png');
$image_g = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/'.$_GET['gender'].'/glasses/g'.$_GET['g'].'.png');
$image_ha = imagecreatefrompng(__LOCAL_DIR__.'images/avatar/items/'.$_GET['gender'].'/hat/ha'.$_GET['ha'].'.png');

imagesavealpha($final_img, true);
imagesavealpha($image_base, true);
imagesavealpha($image_f, true);
imagesavealpha($image_h, true);
imagesavealpha($image_sho, true);
imagesavealpha($image_t, true);
imagesavealpha($image_s, true);
imagesavealpha($image_sk, true);
imagesavealpha($image_d, true);
imagesavealpha($image_sh, true);
imagesavealpha($image_j, true);
imagesavealpha($image_b, true);
imagesavealpha($image_a, true);
imagesavealpha($image_g, true);
imagesavealpha($image_ha, true);

imagealphablending($final_img, true);

imagecopy($final_img, $image_base,0, 0, 0, 0, $x, $y);
imagecopy($final_img, $image_f,0, 0, 0, 0, $x, $y);
imagecopy($final_img, $image_h,0, 0, 0, 0, $x, $y);
imagecopy($final_img, $image_sho,0, 0, 0, 0, $x, $y);
imagecopy($final_img, $image_t,0, 0, 0, 0, $x, $y);
imagecopy($final_img, $image_s,0, 0, 0, 0, $x, $y);
imagecopy($final_img, $image_sk,0, 0, 0, 0, $x, $y);
imagecopy($final_img, $image_d,0, 0, 0, 0, $x, $y);
imagecopy($final_img, $image_sh,0, 0, 0, 0, $x, $y);
imagecopy($final_img, $image_j,0, 0, 0, 0, $x, $y);
imagecopy($final_img, $image_b,0, 0, 0, 0, $x, $y);
imagecopy($final_img, $image_a,0, 0, 0, 0, $x, $y);
imagecopy($final_img, $image_g,0, 0, 0, 0, $x, $y);
imagecopy($final_img, $image_ha,0, 0, 0, 0, $x, $y);

$nombreIMG = $_GET['gender'].'_'.$_GET['tono'].'_'.$_GET['color'].'_'.$_GET['f'].'_'.$_GET['h'].'_'.$_GET['sho'].'_'.$_GET['t'].'_'.$_GET['s'].'_'.$_GET['sk'].'_'.$_GET['d'].'_'.$_GET['sh'].'_'.$_GET['j'].'_'.$_GET['b'].'_'.$_GET['a'].'_'.$_GET['g'].'_'.$_GET['ha'];
imagepng($final_img, __LOCAL_DIR__.'images/avatar/users/'.$nombreIMG.'.png');
$_SESSION['avatar'] = $nombreIMG;

$rutaData = __LOCAL_DIR__.'users/'.$_SESSION['idUsuarioIDC'].'.txt';
$f=fopen($rutaData,"w+");
fwrite($f,strtoupper($_SESSION['login'])."|".$nombreIMG."|".$_SESSION['level']);
fclose($f);

// SALVAMOS EN GAMECENTRAL
if (!empty($nombreIMG) && ($_SESSION['idUsuarioIDC'] == $_GET['user'])) 
{
	include "./unilogin/AppServer.php";
	CrearModificarAvatarUsuario(0,$_SESSION['idUsuarioIDC'],0,$nombreIMG.'.png',1);
}
echo($nombreIMG);

function CrearModificarAvatarUsuario($iIDJuego,$iIDUsuario,$iIDAvatar,$cNickAvatar,$iActivo)
{
	$parametros = array(
		'iIDJuego' => (int)$iIDJuego,
		'iIDUsuario' => (int)$iIDUsuario,
		'iIDAvatar' => (int)$iIDAvatar,
		'cNickAvatar' => $cNickAvatar,
		'iActivo' => (int)$iActivo,
	);
	
	$funcion = "CrearModificarAvatarUsuario";
	$res = AppServer($funcion,$parametros,"gamecentral");
	$hoy = date('Y').'.'.date('m').'.'.date('d');
	alog('./unilogin/logs/crearAvatar.'.$hoy.'.txt',trim($_SERVER["REMOTE_ADDR"]."|CREAR MODIFICAR AVATAR USUARIO:|".json_encode($parametros)."||RESULT:".json_encode($res)));
}

function alog($rutaLog, $texto){
	$fecha=date('Y-m-d H:i:s');
	$f=@fopen($rutaLog,"a+");
	@fwrite($f,"$fecha | " . $texto . "\n");
	@fclose($f);
}