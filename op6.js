function drawOp6() {
  drawBg('#120808', '#1a0d0d');

  // Narrow crack walls
  noStroke();
  fill(COL.rock);
  rect(0, 0, W/2 - 28, H);
  rect(W/2 + 28, 0, W/2 - 28, H);
  fill(COL.bg);
  beginShape();
  vertex(W/2 - 26, 0); vertex(W/2 - 18, 100);
  vertex(W/2 - 24, 200); vertex(W/2 - 17, 300); vertex(W/2 - 21, H);
  vertex(W/2 + 21, H); vertex(W/2 + 17, 300);
  vertex(W/2 + 24, 200); vertex(W/2 + 18, 100); vertex(W/2 + 26, 0);
  endShape(CLOSE);



  // Boulder blocking right
  fill(COL.stone);
  ellipse(W/2 + 18, 260, 40, 28);

  drawManInPot(W/2, 340);

  fill(COL.danger + '33');
  ellipse(W/2, 340, 76, 58);

  fill(COL.cream);
  textAlign(CENTER, CENTER);
  textFont('Georgia, serif');
  textSize(14);
  textLeading(22);
  text(
    'The crack is narrow. Claustrophobic.\nBut faster — you\'re almost through.\nAbove: a fork. The crack widens left.\nA loose boulder blocks the right.',
    W/2, 128
  );

  fill(COL.danger);
  textSize(11);
  text('Risk accumulates. Choose before your grip fails.', W/2, 226);

  drawButton('Go left — take the wider gap', W/2 - 145, 390, 240, 52);
  drawButton('Push past the boulder', W/2 + 145, 390, 240, 52);

  fill(COL.muted + '88');
  textSize(10);
  text('Some paths are not meant to be taken', W/2, H - 15);
}

function handleOp6Click() {
  if (isMouseOver(W/2 - 145, 390, 240, 52)) goTo(STATE_END7);
  if (isMouseOver(W/2 + 145, 390, 240, 52)) goTo(STATE_END8);
}