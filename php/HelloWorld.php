<?php
return "testing";
class HelloWorld
{
	public $greeting = "Hello World";

	function HelloWorld(){
		$greeting = "Hello World";
	}

	function greet(){
		$hi = 'hi';

		$hi = $this -> greeting;

		return $hi;
	}
}

?>
