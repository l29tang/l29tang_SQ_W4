function drawEnd8() {
  drawBg('#0e0606', '#160808');

  noStroke(); fill(COL.rock);
  rect(0, 0, W/2 - 28, H); rect(W/2 + 28, 0, W/2 - 28, H);

  // Boulder fallen
  fill(COL.stone);
  ellipse(W/2, 390, 90, 60);
  fill(COL.rockLight);
  ellipse(W/2 - 10, 382, 40, 28);

  // Crushed pot sticking out
  fill(COL.muted + 'cc');
  rect(W/2 - 12, 415, 24, 14, 2);

  fill(COL.danger);
  textAlign(CENTER, CENTER); textFont('Georgia, serif');
  textSize(26); text('ENDING 8', W/2, 55);
  textSize(15); text('THE BOULDER WINS', W/2, 83);

  fill(COL.cream); textSize(13); textLeading(22);
  text(
    'You pushed.\nThe boulder shifted — then rolled.\nNot away. Down.\nDirectly onto you.\n\nThe crack swallowed everything.\nEven the echo took a while to fade.',
    W/2, 218
  );

  fill(COL.danger); textSize(11); textStyle(ITALIC);
  text('"Some risks were always going to end this way."', W/2, 336);
  textStyle(NORMAL);

  drawButton('Try Again', W/2, 420, 160, 44);
}

function handleEnd8Click() {
  if (isMouseOver(W/2, 420, 160, 44)) goTo(STATE_START);
}