const BACKGROUND_COLOR = "#fafafa"
const WEIGHT = 5

let tiles = 50
let actRandomSeed = 0

function setup() {
  let c = createCanvas(900, 900)
  colorMode(HSB, 360, 100, 100, 100);

  tileSize = width / tiles

  noLoop()

  strokeWeight(WEIGHT)
  stroke(274, random(0,100), random(0,100), 100)
}

function draw() {
  background(BACKGROUND_COLOR)
  randomSeed(actRandomSeed)

  for (var y = 0; y < height; y = y + tileSize) {
    for (var x = 0; x < width; x = x + tileSize) {
      r = int(random(0, 4))
      if (r == 0) {
        line(x, y, x + tileSize, y + tileSize)
      } else if (r == 1) {
        line(x + tileSize, y, x, y + tileSize)
      } else if (r == 2) {
        line(x, y + tileSize / 2, x + tileSize, y + tileSize / 2)
      } else if (r == 3) {
        line(x + tileSize / 2, y, x + tileSize / 2, y + tileSize)
      }
    }
  }
}

function keyPressed() {
  if (key == " ") {
    actRandomSeed = random(100000)
    redraw()
  } else if (key == "s") {
    save("screenshot.png")
  }
}
