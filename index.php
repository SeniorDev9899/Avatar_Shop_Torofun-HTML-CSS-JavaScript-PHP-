<?php

	$json = file_get_contents("sections.json");
	$sections = json_decode($json, true);

	$json = file_get_contents("models.json");
	$models = json_decode($json, true);

	$json = file_get_contents("relations.json");
	$relations = json_decode($json, true);

	// ******************************************************************** MySQL Connection *****************************************************//

	$servername = 'localhost:3306';
	$username = 'root';
	$password = '';
	$dbname = 'laravelvuecrud';

	// Create Connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);

	// Check Connection
	if(!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "SELECT * FROM categories";
	$result = mysqli_query($conn, $sql);

	if(mysqli_num_rows($result) > 0) {
		//output data of each row
		$responses = mysqli_fetch_assoc($result);

		
	} else {
		echo "0 results";
	}

	mysqli_close($conn);

?>
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
		<meta name="description" content="Torofun Launcher for GIT">
		<meta name="author" content="Torofun Games">
		<meta name="keywords" content="">
		<title>Torofun Launcher for GIT</title>
		<link rel="shortcut icon" href="https://es.torofun.com/favicon.ico">
		<style>
			h1{
				text-align: center;
				background: #000;
				color: #FFF;
				padding: 8px 16px;
			}
			h2{
				background: #666;
				color: #FFF;
				padding: 8px 16px;
			}
			li{
				padding: 3px 6px;
			}
		</style>
	</head>
	<body>
		<main>
			<h1>Torofun Launcher for GIT</h1>

			<!-- <section>
				<h2>RESPONSES</h2>
				<ul>
					<?php
						foreach( $responses as $res ){
							echo '<li> '.$res.' - <a href="run.php?section='.$res.'" target="_blank">Test it</a></li>';
						}
					?>
				</ul>
			</section> -->

			<section>
				<h2>SECTIONS</h2>
				<ul>
					<?php
						foreach( $sections as $sect ){
							echo '<li> '.$sect.' - <a href="run.php?section='.$sect.'" target="_blank">Test it</a></li>';
						}
					?>
				</ul>
			</section>

			<section>
				<h2>MODELS</h2>
				<ul>
					<?php
						foreach( $models as $mod ){
							echo '<li> '.$mod.' </li>';
						}
					?>
				</ul>
			</section>

			<section>
				<h2>MODELS FOR SECTION</h2>
				<ul>
					<?php
						foreach( $relations as $index => $rel ){
							echo '<li> '.$index.' <ol>';
							foreach( $rel as $model ){
								echo "<li>".$model."</li>";
							}
							echo '</ol></li>';
						}
					?>
				</ul>
			</section>
			
			<section>
				<h2> RULES </h2>
				<ul class="rules">
					<li>There are 3 JSON files: sections.json, models.json and relations.json on root path</li>
					<li>Those JSON allow to build pages like the Torofun Panel </li>
					<li>There is no CRUD editor. Edit the JSONs manually if you need to update </li>
					<li>All models files should be in separate folders inside ./resources folder</li>
					<li>For each model there should be 5 files: html.html, css.css, js-head.html, js-footer.html and js-ready.js. Edit all of them like in the Torofun Panel</li>
					<li>There is an empty copy of each file on ./resources</li>
					<li>If you need to add a new library, image or something, put it into new-resources folder and link it in HTML using "./new-resources/..." </li>
					<li>There are 2 CSV files: language and VARS. They contains the translations and custom vars to resolve </li>
				</ul>
			</section>
		</main>
	</body>
</html>