<!DOCTYPE html>
<html>
<head>
	<title>Hello</title>
</head>
<body>
	<p>
		<?php
		require('HelloWorld.php');
		$back = new HelloWorld();
		// $back->$greeting = "Hello World";
		$greet = $back->greet();

		echo $greet;
		?>
	</p>
</body>
</html>
