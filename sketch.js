let ben
let inputBox
let submit
let answerBox
let bg
let pixelFont

function setup() {
  createCanvas(1500, 700)
  bg = loadImage("ben_bg.png")
  pixelFont = loadFont("daydream.ttf", a => {
    textFont(pixelFont)
  })
  ben = new TalkingBen("ben_img.png")
  inputBox = createInput()
  inputBox.position(800, 180)
  inputBox.size(550)
  
  submit = createButton("Submit Question")
  submit.position(inputBox.x, inputBox.y + 30)
  submit.mousePressed(getAnswer)
  
  answerBox = new AnswerBox("ben_speech_bubble.png")
}

function draw() {
  background("#dedede")
  image(bg, 0, 0)
  noStroke()
  fill("#e8e8e844")
  rect(0, 0, 1920, 100)
  textSize(80)
  fill("#000000")
  text("Ask Ben", 450, 65)
  ben.render();
  if (answerBox.isActive()) {
    answerBox.render()
  }
}

function getAnswer() {
  let text = trim(inputBox.value())
  if (text) {
    answer = ben.randomAnswer()
    answerBox.beginActiveTimeout(answer)
    inputBox.value("")
    print ("You asked Ben... '" + text + "'")
    print ("Ben says... " + answer.toUpperCase())
  }
  else {
    alert("Enter a question first!")
  }
}
