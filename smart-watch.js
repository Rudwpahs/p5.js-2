let angleSec, angleMin, angleHour;
let cloudX = 0;

function setup() {
  createCanvas(360, 360);
  angleMode(DEGREES);
}

function draw() {
  background(153,204,255);
  translate(width / 2, height / 2);

  angleSec = map(second(), 0, 60, 0, 360) - 90;
  angleMin = map(minute() + norm(second(), 0, 60), 0, 60, 0, 360) - 90;
  angleHour = map(hour() + norm(minute(), 0, 60), 0, 12, 0, 360) - 90;

  // 초침
  strokeWeight(2);
  stroke(255, 75, 0);
  line(0, 0, cos(angleSec) * 140, sin(angleSec) * 140);

  // 분침
  strokeWeight(4);
  stroke(0, 255, 200);
  line(0, 0, cos(angleMin) * 120, sin(angleMin) * 120);

  // 시침
  strokeWeight(6);
  stroke(255);
  line(0, 0, cos(angleHour) * 80, sin(angleHour) * 80);

  // 눈금
  strokeWeight(2);
  stroke(150);
  for (let i = 0; i < 60; i++) {
    let angle = map(i, 0, 60, 0, 360) - 90;
    if (i % 5 == 0) {
      strokeWeight(4);
      line(cos(angle) * 152, sin(angle) * 152, cos(angle) * 168, sin(angle) * 168);
    } else {
      strokeWeight(2);
      line(cos(angle) * 160, sin(angle) * 160, cos(angle) * 168, sin(angle) * 168);
    }
  }

  // 중앙 원
  noStroke();
  fill(150);
  ellipse(0, 0, 8, 8);

  // 구름
  cloudX += 0.1;
  drawCloud(cloudX % width, 50, 50, 20, 10);
  drawCloud((cloudX % width) - width, 200, 100, 40, 20);
  drawCloud((cloudX % width) + width, 200, 200, 30, 15);
}

function drawCloud(x, y, r, numCircles, circleSize) {
  noStroke();
  fill(255);
  ellipse(x, y, r * 2, r);
  let spacing = r * 2 / numCircles;
  for (let i = 0; i < numCircles; i++) {
    ellipse(x + i * spacing - r, y, circleSize, circleSize);
  }
}
