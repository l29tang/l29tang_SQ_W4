function drawEnd7() {
  drawBg('#080c10', '#0d1018');

  noStroke(); fill(COL.rock);
  rect(0, 0, W/2 - 60, H);
  rect(W/2 + 60, 0, W/2 - 60, H);
  fill(COL.rockLight);
  rect(W/2 - 58, 0, 116, H);

  // Wide gap — open sky above
  fill(15, 18, 30, 200);
  rect(W/2 - 58, 0, 116, 300);

  // Stars in the gap
  fill(COL.cream + 'cc');
  for (let i = 0; i < 12; i++) {
    randomSeed(i * 7);
    ellipse(W/2 - 40 + random(80), random(280), random(1, 3));
  }

  drawManInPot(W/2, 350);

  fill(COL.muted);
  textAlign(CENTER, CENTER); textFont('Georgia, serif');
  textSize(26); text('ENDING 7', W/2, 55);
  textSize(15); text('THE LONG WAY AROUND', W/2, 83);

  fill(COL.cream); textSize(13); textLeading(22);
  text(
    'The wider gap was safe.\nYou made it through.\nBut the gap opened onto a ledge\nleading back down the other side.\n\nYou have crossed the mountain.\nYou are not on top of it.',
    W/2, 220
  );

  fill(COL.muted); textSize(11); textStyle(ITALIC);
  text('"Not every path leads where you think."', W/2, 342);
  textStyle(NORMAL);

  drawButton('Try Again', W/2, 420, 160, 44);
}

function handleEnd7Click() {
  if (isMouseOver(W/2, 420, 160, 44)) goTo(STATE_START);
}