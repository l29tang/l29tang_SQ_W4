function drawOp1() {
  drawBg('#120d06', '#1e1206');

  // Rocky platform halfway up
  noStroke();
  fill(COL.rock);
  rect(0, 370, W, 130);
  fill(COL.rockLight);
  rect(W/2 - 100, 320, 200, 55, 3);
  fill(COL.stone);
  rect(W/2 - 55, 300, 35, 24, 2);
  rect(W/2 + 15, 308, 45, 18, 2);

  // Summit hint
  fill(COL.stone);
  triangle(W/2, 50, W/2 - 70, 200, W/2 + 70, 200);

  drawManInPot(W/2, 308);

  fill(COL.cream);
  textAlign(CENTER, CENTER);
  textFont('Georgia, serif');
  textSize(14);
  textLeading(22);
  text(
    'Bold and reckless, you swung upward.\nThe hammer found purchase. You rose.\nHalf the mountain is already behind you.\nBut the ledge above looks treacherous.',
    W/2, 135
  );

  fill(COL.muted);
  textSize(12);
  text('What do you do?', W/2, 222);

  drawButton('Swing hard and fast — keep momentum!', W/2 - 155, 390, 255, 52);
  drawButton('Slow down, find secure footing', W/2 + 155, 390, 255, 52);

  fill(COL.muted + '88');
  textSize(10);
  text('Every choice echoes', W/2, H - 15);
}

function handleOp1Click() {
  if (isMouseOver(W/2 - 155, 390, 255, 52)) goTo(STATE_OP3);
  if (isMouseOver(W/2 + 155, 390, 255, 52)) goTo(STATE_OP4);
}