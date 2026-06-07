function drawOp5() {
  drawBg('#08100e', '#0d1812');

  noStroke();
  fill(COL.rock);
  rect(0, 370, W, 130);
  fill(COL.rockLight);
  rect(W/2 - 130, 325, 260, 50, 4);
  stroke(COL.stone + '88'); strokeWeight(1);
  line(W/2 - 110, 340, W/2 + 110, 340);
  line(W/2 - 90, 354, W/2 + 90, 354);
  noStroke();

  // Summit visible
  fill(COL.stone);
  triangle(W/2, 75, W/2 - 65, 210, W/2 + 65, 210);
  fill(200, 210, 220, 180);
  ellipse(W/2, 83, 36, 13);

  drawManInPot(W/2, 315);

  fill(COL.cream);
  textAlign(CENTER, CENTER);
  textFont('Georgia, serif');
  textSize(14);
  textLeading(22);
  text(
    'The left ledge was exactly as you mapped it.\nWide. Stable. Trustworthy.\nBut now two paths rise from here:\none worn smooth by wind,\none rough and new.',
    W/2, 140
  );

  fill(100, 180, 130);
  textSize(12);
  text('Your patience has brought you far. Choose wisely.', W/2, 234);

  drawButton('Take the smooth, worn path', W/2 - 145, 390, 240, 52);
  drawButton('Climb the rough, untested rock', W/2 + 145, 390, 240, 52);

  fill(COL.muted + '88');
  textSize(10);
  text('The mountain remembers every climber', W/2, H - 15);
}

function handleOp5Click() {
  if (isMouseOver(W/2 - 145, 390, 240, 52)) goTo(STATE_END5);
  if (isMouseOver(W/2 + 145, 390, 240, 52)) goTo(STATE_END6);
}