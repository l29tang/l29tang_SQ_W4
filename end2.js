function drawEnd2() {
  drawBg('#0d1a0d', '#102010');

  // Summit glow
  noStroke(); fill(180, 220, 160, 40);
  ellipse(W/2, 160, 300, 200);

  fill(COL.rockLight);
  triangle(W/2, 80, W/2 - 100, 320, W/2 + 100, 320);
  fill(220, 230, 220);
  ellipse(W/2, 90, 50, 16);

  drawManInPot(W/2, 220);

  fill(100, 200, 130);
  textAlign(CENTER, CENTER); textFont('Georgia, serif');
  textSize(26); text('ENDING 2', W/2, 60);
  textSize(15); text('THE SUMMIT', W/2, 88);

  fill(COL.cream); textSize(13); textLeading(22);
  text(
    'You paused. You breathed.\nThen — with perfect, quiet intention —\nyou reached.\n\nThe summit is cold and still.\nYou are the only person here.\nYou feel, briefly, like yourself.',
    W/2, 230
  );

  fill(100, 200, 130); textSize(11); textStyle(ITALIC);
  text('"Getting over it."', W/2, 348);
  textStyle(NORMAL);

  drawButton('Play Again', W/2, 420, 160, 44);
}

function handleEnd2Click() {
  if (isMouseOver(W/2, 420, 160, 44)) goTo(STATE_START);
}