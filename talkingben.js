class TalkingBen {
  constructor(ben_path) {
    this.ben_img = loadImage(ben_path, ben_img => {
      ben_img.resize(1250, 0)
    })
  }                        
  
  render() {
    image(this.ben_img, -200, 75)
  }
  
  randomAnswer() {
    let a = Math.floor(Math.random() * 200)
    if (a >= 120) {
      return "Yes."
    }
    else if (a >= 40) {
      return "No."
    }
    else if (a == 0) {
      return "Bing Chilling"
    }
    return "Ben?"
  }
}
