<?php 
class Frog{
    public $legs = 4;
    public $cold_blooded = 'no';
    public $name;
    public function jump(){
        return "hop hop";
    }
    public function __construct($x)
    {
        $this->name = $x;
    }
}
?>