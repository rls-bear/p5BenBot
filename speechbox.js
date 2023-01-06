class AnswerBox {
  constructor(answer_box_path) {
    this.img = loadImage(answer_box_path)
    this.img.resize(20, 0)
    this.text = "None"
    this.timeout = ""
    this.active = false
    this.text = ""
  }
  beginActiveTimeout(newText) {
    this.text = newText
    if (this.timeout != "") {
      clearTimeout(this.timeout)
    }
    let that = this
    this.timeout = setTimeout(function() {
      that.timeout = ""
      that.active = false
      that.text = "None"
    }, 6000)
    this.active = true
    
  }
  render() {
    image(this.img, 810, 260)
    fill("#474747")
    textSize(25)
    text("Ben says...", 835, 360)
    fill("#000000")
    textSize(60)
    text(this.text, 835, 430)
  }
  isActive() {
    return this.active
  }
}
