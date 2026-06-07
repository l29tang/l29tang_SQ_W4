function drawEnd5() {
  drawBg('#0a0808', '#130e0a');

  noStroke(); fill(COL.rock); rect(0, 400, W, 100);
  // Smooth slope
  fill(COL.rockLight);
  beginShape();
  vertex(W/2 - 150, 400); vertex(W/2 - 50, 200);
  vertex(W/2 + 50, 200); vertex(W/2 + 150, 400);
  endShape(CLOSE);

  drawManInPot(W/2, 395);

  fill(COL.danger);
  textAlign(CENTER, CENTER); textFont('Georgia, serif');
  textSize(26); text('ENDING 5', W/2, 55);
  textSize(15); text('WORN SMOOTH FOR A REASON', W/2, 83);

  fill(COL.cream); textSize(13); textLeading(22);
  text(
    'The smooth path was smooth\nbecause a thousand others walked it.\nAll of them slipped at the same place.\n\nSo did you.\n\nThe mountain has a sense of irony.',
    W/2, 220
  );

  fill(COL.muted); textSize(11); textStyle(ITALIC);
  text('"Familiarity is not safety."', W/2, 336);
  textStyle(NORMAL);

  drawButton('Try Again', W/2, 420, 160, 44);
}

function handleEnd5Click() {
  if (isMouseOver(W/2, 420, 160, 44)) goTo(STATE_START);
}