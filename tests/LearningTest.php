<?php 
use PHPUnit\Framework\TestCase;
use DorothyMolloy\LearningProject\Learning;
 
class LearningTest extends TestCase {
 
  public function testHasCheese()
  {
    $learning = new Learning;
    $this->assertTrue($learning->hasCheese());
  }

  public function testWhatCheese(){
  	$learning = new Learning;
  	$this->assertEquals($learning->getCheese(), "camenbert");

  }
 
}