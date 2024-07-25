<?php 
class Ape{
    public $legs = 2;
    public $cold_blooded = 'no';
    public $name;
    public function yell(){
        return "Auooo";
    }
    public function __construct($x)
    {
        $this->name = $x;
    }
}
?>