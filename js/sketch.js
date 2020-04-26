const WIDTH = 900
const HEIGHT = 900
const BACKGROUND_COLOR = '#fafafa'
const COLOR = '#fa7268'
const WEIGHT = 13
const MARGIN = 20

let tileCount = 25

function setup() {
  let c = createCanvas(WIDTH, HEIGHT)
  noLoop()

  strokeWeight(WEIGHT)
  stroke(COLOR)
}

function draw() {
  background(BACKGROUND_COLOR)

  for (let gridY = 1; gridY < HEIGHT; gridY++) {
      let posX = MARGIN
      let posY = tileCount * gridY
      let complete = random(-1, 1)
      console.log(complete)

      fill(COLOR)
      if (posY != HEIGHT) {
        if (complete > 0.8) {
          line(posX, posY, WIDTH - MARGIN - 50, posY)
        } else {
          line(posX, posY, WIDTH - MARGIN, posY)
      }
    }
  }
}


function keyPressed() {
  if (key == "s" || key == "S") saveCanvas('screenshot', 'png')
}
