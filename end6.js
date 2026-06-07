function drawEnd6() {
  drawBg('#0d1410', '#101a12');

  noStroke(); fill(COL.rock);
  // Rough jagged rock
  beginShape();
  vertex(W/2 - 120, H); vertex(W/2 - 110, 340);
  vertex(W/2 - 80, 310); vertex(W/2 - 60, 330);
  vertex(W/2 - 30, 280); vertex(W/2, 250);
  vertex(W/2 + 30, 280); vertex(W/2 + 60, 260);
  vertex(W/2 + 90, 300); vertex(W/2 + 110, 340);
  vertex(W/2 + 120, H);
  endShape(CLOSE);

  // Summit marker
  fill(COL.orange); ellipse(W/2, 250, 18, 18);
  fill(COL.cream); ellipse(W/2, 250, 8, 8);

  drawManInPot(W/2, 300);

  fill(100, 190, 140);
  textAlign(CENTER, CENTER); textFont('Georgia, serif');
  textSize(26); text('ENDING 6', W/2, 55);
  textSize(15); text('THE HARD WAY UP', W/2, 83);

  fill(COL.cream); textSize(13); textLeading(22);
  text(
    'The rough rock cut your hands.\nEvery grip was uncertain.\nBut uncertainty kept you focused.\n\nYou climbed slowly.\nYou climbed well.\nYou arrived.',
    W/2, 218
  );

  fill(100, 190, 140); textSize(11); textStyle(ITALIC);
  text('"The hard way is sometimes the only way."', W/2, 336);
  textStyle(NORMAL);

  drawButton('Play Again', W/2, 420, 160, 44);
}

function handleEnd6Click() {
  if (isMouseOver(W/2, 420, 160, 44)) goTo(STATE_START);
}