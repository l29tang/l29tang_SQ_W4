function drawEnd4() {
  drawBg('#0d0d14', '#101020');

  noStroke(); fill(COL.rock);
  rect(0, 0, 80, H); rect(W - 80, 0, 80, H);
  fill(COL.rockLight);
  rect(80, 200, W - 160, 220, 4);

  // Hammer marks on wall
  stroke(COL.orange + '99'); strokeWeight(2);
  for (let i = 0; i < 4; i++) {
    line(85 + i*8, 220 + i*15, 105 + i*8, 240 + i*15);
  }
  noStroke();

  drawManInPot(W/2, 300);

  fill(COL.orange);
  textAlign(CENTER, CENTER); textFont('Georgia, serif');
  textSize(26); text('ENDING 4', W/2, 55);
  textSize(15); text('THE UNEXPECTED ROUTE', W/2, 83);

  fill(COL.cream); textSize(13); textLeading(22);
  text(
    'You hammered the wall instead.\nBehind the rock: a passage.\nA hidden chimney rising straight up —\nno one has used it before.\n\nYou reach the summit by a path\nnot on any map.',
    W/2, 225
  );

  fill(COL.orange); textSize(11); textStyle(ITALIC);
  text('"Some mountains reward stubbornness."', W/2, 342);
  textStyle(NORMAL);

  drawButton('Play Again', W/2, 420, 160, 44);
}

function handleEnd4Click() {
  if (isMouseOver(W/2, 420, 160, 44)) goTo(STATE_START);
}