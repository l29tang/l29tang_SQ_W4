function drawStartScreen() {
  drawBg('#0d0b08', '#1a1208');
  drawMountainSilhouette();



  drawManInPot(W/2, 340);

  // Title
  textAlign(CENTER, CENTER);
  textFont('Georgia, serif');
  textSize(34);
  fill(COL.cream);
  text('GETTING OVER IT', W/2, 80);
  textSize(13);
  fill(COL.muted);
  text('A Story of Persistence', W/2, 118);
  textSize(11);
  textStyle(ITALIC);
  text('"I made this game for a certain kind of person."', W/2, 148);
  textStyle(NORMAL);

  drawButton('BEGIN THE CLIMB', W/2, 390, 210, 48);

  fill(COL.muted + '88');
  textSize(10);
  text('Use your mouse to make choices', W/2, H - 18);
}

function drawOpeningScene() {
  drawBg('#0d0b08', '#101520');

  // Central mountain
  noStroke();
  fill(30, 26, 22);
  triangle(W/2, 60, W/2 - 180, H - 60, W/2 + 180, H - 60);
  fill(COL.rock);
  triangle(W/2, 100, W/2 - 120, H - 60, W/2 + 120, H - 60);

  drawManInPot(W/2, 360);

  fill(COL.cream);
  textAlign(CENTER, CENTER);
  textFont('Georgia, serif');
  textSize(14);
  textLeading(22);
  text(
    'You are a man in a cauldron.\nBefore you rises an impossibly steep mountain.\nYour only tool: a long-handled hammer.\n\nThe summit glitters above the clouds.\nEvery grip costs everything.',
    W/2, 170
  );

  fill(COL.muted);
  textSize(12);
  text('How do you begin?', W/2, 278);

  drawButton('Plant the hammer and heave upward', W/2 - 160, 390, 265, 52);
  drawButton('Study the mountain before moving', W/2 + 160, 390, 265, 52);
}

function handleStartClick() {
  if (isMouseOver(W/2, 390, 210, 48)) goTo(STATE_SCENE);
}

function handleSceneClick() {
  if (isMouseOver(W/2 - 160, 390, 265, 52)) goTo(STATE_OP1);
  if (isMouseOver(W/2 + 160, 390, 265, 52)) goTo(STATE_OP2);
}