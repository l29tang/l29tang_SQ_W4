function drawOp2() {
  drawBg('#080c12', '#0d1018');

  // Full mountain with visible path
  noStroke();
  fill(COL.rock);
  beginShape();
  vertex(W/2 - 200, H); vertex(W/2 - 120, 350);
  vertex(W/2 - 60, 280); vertex(W/2, 100);
  vertex(W/2 + 60, 280); vertex(W/2 + 120, 350);
  vertex(W/2 + 200, H);
  endShape(CLOSE);



  drawManInPot(W/2, 425);

  
  fill(COL.cream);
  textAlign(CENTER, CENTER);
  textFont('Georgia, serif');
  textSize(14);
  textLeading(22);
  text(
    'Patience. You observe.\nA ledge on the left. A crack on the right.\nYou see what reckless climbers miss.\nKnowledge is its own kind of grip.',
    W/2, 130
  );

  fill(COL.muted);
  textSize(12);
  text('You have mapped two routes. Which calls to you?', W/2, 228);

  drawButton('Take the left ledge — wide and visible', W/2 - 155, 390, 265, 52);
  drawButton('Use the right crack — risky, faster', W/2 + 155, 390, 265, 52);

  fill(COL.muted + '88');
  textSize(10);
  text('Knowledge without action is nothing', W/2, H - 15);
}

function handleOp2Click() {
  if (isMouseOver(W/2 - 155, 390, 265, 52)) goTo(STATE_OP5);
  if (isMouseOver(W/2 + 155, 390, 265, 52)) goTo(STATE_OP6);
}