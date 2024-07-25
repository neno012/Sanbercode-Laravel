<?php 
require_once('animal.php');
require_once('ape.php');
require_once('frog.php');

$sheep = new Animal("shaun");

$sungokong = new Ape("kera sakti");
$sungokong->yell() ;// "Auooo"

$kodok = new Frog("buduk");
$kodok->jump() ; // "hop hop"

echo "Name:". $sheep->name ."<br>"; // "shaun"
echo "Legs : ".$sheep->legs."<br>"; // 4
echo "cold_blooded : ".$sheep->cold_blooded."<br><br>";


echo "Name:".$sungokong->name ."<br>"; // "shaun"
echo "Legs : ".$sungokong->legs."<br>"; // 4
echo "cold_blooded : ".$sungokong->cold_blooded."<br>";
echo "Yell : ".$sungokong->yell()."</br><br>";

echo "Name:".$kodok->name ."<br>"; // "shaun"
echo "Legs : ".$kodok->legs."<br>"; // 4
echo "cold_blooded : ".$kodok->cold_blooded."<br>";
echo "Yell : ".$kodok->jump()
?>