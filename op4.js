function drawOp4() {
  drawBg('#100e08', '#1a1508');

  noStroke();
  fill(COL.rock);
  rect(0, 360, W, 140);
  fill(COL.rockLight);
  rect(W/2 - 90, 318, 180, 48, 3);
  fill(COL.stone);
  rect(W/2 - 50, 298, 30, 24, 2);
  rect(W/2 + 20, 306, 40, 18, 2);

  // Crumbling edge detail
  fill(COL.danger + '88');
  rect(W/2 + 70, 330, 30, 8, 2);
  fill(COL.muted);
  textSize(9); textAlign(LEFT, TOP); textFont('Georgia, serif');
  text('crumbling', W/2 + 68, 340);
  noStroke();

  // Summit above
  fill(COL.stone);
  triangle(W/2, 60, W/2 - 65, 210, W/2 + 65, 210);

  drawManInPot(W/2, 306);

  fill(COL.cream);
  textAlign(CENTER, CENTER);
  textFont('Georgia, serif');
  textSize(14);
  textLeading(22);
  text(
    'You slow yourself down.\nThe ledge ahead is crumbling at its edge.\nYour boldness got you here.\nYour patience might save you.',
    W/2, 135
  );

  fill(COL.muted);
  textSize(12);
  text('How do you cross the crumbling ledge?', W/2, 225);

  drawButton('Crawl slowly across the edge', W/2 - 145, 390, 240, 52);
  drawButton('Hammer into the wall — bypass it', W/2 + 145, 390, 240, 52);

  fill(COL.muted + '88');
  textSize(10);
  text('Caution is not cowardice', W/2, H - 15);
}

function handleOp4Click() {
  if (isMouseOver(W/2 - 145, 390, 240, 52)) goTo(STATE_END3);
  if (isMouseOver(W/2 + 145, 390, 240, 52)) goTo(STATE_END4);
}