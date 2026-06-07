function setup() {
  createCanvas(W, H);
}

function draw() {
  background(COL.bg);
  if      (gameState === STATE_START) drawStartScreen();
  else if (gameState === STATE_SCENE) drawOpeningScene();
  else if (gameState === STATE_OP1)   drawOp1();
  else if (gameState === STATE_OP2)   drawOp2();
  else if (gameState === STATE_OP3)   drawOp3();
  else if (gameState === STATE_OP4)   drawOp4();
  else if (gameState === STATE_OP5)   drawOp5();
  else if (gameState === STATE_OP6)   drawOp6();
  else if (gameState === STATE_END1)  drawEnd1();
  else if (gameState === STATE_END2)  drawEnd2();
  else if (gameState === STATE_END3)  drawEnd3();
  else if (gameState === STATE_END4)  drawEnd4();
  else if (gameState === STATE_END5)  drawEnd5();
  else if (gameState === STATE_END6)  drawEnd6();
  else if (gameState === STATE_END7)  drawEnd7();
  else if (gameState === STATE_END8)  drawEnd8();
}

function mousePressed() {
  if      (gameState === STATE_START) handleStartClick();
  else if (gameState === STATE_SCENE) handleSceneClick();
  else if (gameState === STATE_OP1)   handleOp1Click();
  else if (gameState === STATE_OP2)   handleOp2Click();
  else if (gameState === STATE_OP3)   handleOp3Click();
  else if (gameState === STATE_OP4)   handleOp4Click();
  else if (gameState === STATE_OP5)   handleOp5Click();
  else if (gameState === STATE_OP6)   handleOp6Click();
  else if (gameState === STATE_END1)  handleEnd1Click();
  else if (gameState === STATE_END2)  handleEnd2Click();
  else if (gameState === STATE_END3)  handleEnd3Click();
  else if (gameState === STATE_END4)  handleEnd4Click();
  else if (gameState === STATE_END5)  handleEnd5Click();
  else if (gameState === STATE_END6)  handleEnd6Click();
  else if (gameState === STATE_END7)  handleEnd7Click();
  else if (gameState === STATE_END8)  handleEnd8Click();
}