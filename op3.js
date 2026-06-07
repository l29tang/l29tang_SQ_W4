function drawOp3() {
  drawBg('#0e0c14', '#151020');

  // Near-summit, narrow peak
  noStroke();
  fill(COL.rock);
  triangle(W/2, 50, W/2 - 80, H - 80, W/2 + 80, H - 80);

  // Snow/frost patches
  fill(210, 215, 225);
  ellipse(W/2 - 18, 98, 38, 14);
  ellipse(W/2 + 14, 118, 28, 10);
  ellipse(W/2, 78, 46, 12);


  drawManInPot(W/2, 200);

  // Speed lines
  stroke(COL.orange + '66'); strokeWeight(1);
  for (let i = 0; i < 5; i++) {
    line(W/2 - 80, 165 + i*18, W/2 - 42, 170 + i*18);
  }
  noStroke();

  fill(COL.cream);
  textAlign(CENTER, CENTER);
  textFont('Georgia, serif');
  textSize(14);
  textLeading(22);
  text(
    'Pure momentum! You\'re nearly there.\nThe summit is within arm\'s reach.\nBut the rock here is slick with frost.\nOne wrong swing and you fall forever.',
    W/2, 138
  );

  fill(COL.orange);
  textSize(12);
  text('This is the moment. Everything or nothing.', W/2, 242);

  drawButton('One final reckless lunge!', W/2 - 145, 390, 240, 52);
  drawButton('Pause — breathe — then reach', W/2 + 145, 390, 240, 52);

  fill(COL.muted + '88');
  textSize(10);
  text('The summit does not forgive', W/2, H - 15);
}

function handleOp3Click() {
  if (isMouseOver(W/2 - 145, 390, 240, 52)) goTo(STATE_END1);
  if (isMouseOver(W/2 + 145, 390, 240, 52)) goTo(STATE_END2);
}