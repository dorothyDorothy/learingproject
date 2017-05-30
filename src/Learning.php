<?php namespace DorothyMolloy\LearningProject;
 
class Learning {

	private $cheese = "camenbert";
 
  public function hasCheese($bool = true)
  {
    return $bool;
  }

  public function getCheese() {
  	return $this->cheese;
  }
 
}