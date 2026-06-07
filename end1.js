function drawEnd1() {
  drawBg('#0a0606', '#150808');
  noStroke(); fill(COL.rock); rect(0, 400, W, 100);
  fill(COL.stone); ellipse(W/2, 430, 120, 40);

  drawManInPot(W/2, 420);

  fill(COL.danger);
  textAlign(CENTER, CENTER); textFont('Georgia, serif');
  textSize(26); text('ENDING 1', W/2, 60);
  textSize(15); text('THE GREAT FALL', W/2, 95);

  fill(COL.cream); textSize(13); textLeading(22);
  text(
    'You lunged. The frost gave way.\nThe hammer found nothing but air.\nYou slid — then fell — all the way back\nto where you started, at the mountain\'s feet.\n\nThe mountain did not even notice.',
    W/2, 210
  );

  fill(COL.muted); textSize(11); textStyle(ITALIC);
  text('"It\'s supposed to be hard."', W/2, 325);
  textStyle(NORMAL);

  drawButton('Try Again', W/2, 420, 160, 44);
}

function handleEnd1Click() {
  if (isMouseOver(W/2, 420, 160, 44)) goTo(STATE_START);
}