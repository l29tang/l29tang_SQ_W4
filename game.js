const STATE_START = 'start';
const STATE_SCENE = 'scene';
const STATE_OP1 = 'op1';
const STATE_OP2 = 'op2';
const STATE_OP3 = 'op3';
const STATE_OP4 = 'op4';
const STATE_OP5 = 'op5';
const STATE_OP6 = 'op6';
const STATE_END1 = 'end1';
const STATE_END2 = 'end2';
const STATE_END3 = 'end3';
const STATE_END4 = 'end4';
const STATE_END5 = 'end5';
const STATE_END6 = 'end6';
const STATE_END7 = 'end7';
const STATE_END8 = 'end8';

let gameState = STATE_START;
const W = 700;
const H = 500;

const COL = {
  bg:        '#0d0b08',
  rock:      '#2a2320',
  rockLight: '#3d3530',
  stone:     '#564e47',
  orange:    '#c46a2a',
  cream:     '#e8dcc8',
  muted:     '#8a7d6e',
  danger:    '#8b2020',
  sky:       '#1a1a2e',
};

function isMouseOver(cx, cy, w, h) {
  return mouseX > cx - w/2 && mouseX < cx + w/2 &&
         mouseY > cy - h/2 && mouseY < cy + h/2;
}

function drawButton(label, cx, cy, w, h) {
  let hovered = isMouseOver(cx, cy, w, h);
  let bx = cx - w/2, by = cy - h/2;
  noStroke();
  fill(0, 0, 0, 80);
  rect(bx + 3, by + 4, w, h, 4);
  fill(hovered ? COL.orange : COL.rock);
  stroke(hovered ? '#e8842a' : COL.stone);
  strokeWeight(1.5);
  rect(bx, by, w, h, 4);
  noStroke();
  fill(hovered ? COL.bg : COL.cream);
  textAlign(CENTER, CENTER);
  textSize(13);
  textFont('Georgia, serif');
  text(label, cx, cy);
}

function drawBg(topCol, botCol) {
  for (let i = 0; i < H; i++) {
    let t = i / H;
    let tc = color(topCol), bc = color(botCol);
    stroke(lerpColor(tc, bc, t));
    line(0, i, W, i);
  }
}

function drawManInPot(x, y) {
  push();
  translate(x, y);
  fill(COL.stone); stroke(COL.muted); strokeWeight(1.5);
  arc(0, 20, 50, 40, 0, PI, CHORD);
  rect(-25, 5, 50, 18, 2);
  fill(COL.muted);
  ellipse(0, -10, 22, 28);
  fill(COL.cream);
  ellipse(0, -28, 20, 20);
  stroke(COL.muted); strokeWeight(3);
  line(8, -10, 35, -35);
  stroke(COL.stone); strokeWeight(6);
  line(30, -38, 42, -28);
  pop();
}

function drawMountainSilhouette() {
  noStroke();
  fill(20, 18, 15);
  beginShape();
  vertex(0, H); vertex(0, 300); vertex(80, 200); vertex(160, 260);
  vertex(240, 150); vertex(320, 220); vertex(400, 120);
  vertex(480, 200); vertex(560, 160); vertex(640, 240);
  vertex(W, 280); vertex(W, H);
  endShape(CLOSE);
  fill(COL.rock);
  beginShape();
  vertex(0, H); vertex(0, H-80); vertex(60, H-130);
  vertex(140, H-90); vertex(220, H-150); vertex(300, H-100);
  vertex(380, H-160); vertex(460, H-110); vertex(540, H-140);
  vertex(620, H-100); vertex(W, H-80); vertex(W, H);
  endShape(CLOSE);
}

function goTo(state) { gameState = state; }