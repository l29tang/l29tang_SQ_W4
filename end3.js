function drawEnd3() {
  drawBg('#0a0808', '#120d0a');

  noStroke(); fill(COL.rock); rect(0, 390, W, 110);
  // Broken ledge fragments
  fill(COL.stone);
  rect(W/2 - 90, 370, 60, 22, 2);
  fill(COL.rockLight);
  rect(W/2 + 20, 380, 50, 18, 2);
  fill(COL.danger + '66');
  rect(W/2 - 20, 375, 35, 16, 2);

  drawManInPot(W/2, 380);

  fill(COL.danger);
  textAlign(CENTER, CENTER); textFont('Georgia, serif');
  textSize(26); text('ENDING 3', W/2, 55);
  textSize(15); text('THE CRUMBLE', W/2, 83);

  fill(COL.cream); textSize(13); textLeading(22);
  text(
    'You crawled. Careful. Deliberate.\nHalfway across — the ledge gave a crack.\nThen another.\nThen nothing beneath you at all.\n\nThe careful path was not safe.\nIt was just slower.',
    W/2, 220
  );

  fill(COL.muted); textSize(11); textStyle(ITALIC);
  text('"The mountain makes no promises."', W/2, 340);
  textStyle(NORMAL);

  drawButton('Try Again', W/2, 420, 160, 44);
}

function handleEnd3Click() {
  if (isMouseOver(W/2, 420, 160, 44)) goTo(STATE_START);
}