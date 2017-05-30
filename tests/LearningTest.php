<?php 
 
use DorothyMolloy\LearningProject\Learning;
 
class LearningTest extends PHPUnit_Framework_TestCase {
 
  public function testHasCheese()
  {
    $learning = new Learning;
    $this->assertTrue($learning->hasCheese());
  }
 
}