module.exports = {
  name: 'QOTDgetAll',
  description: 'get all questions',
  get(message, filePath) {
    const fs = require("fs");
    let rawdata = fs.readFileSync(filePath);
    let questions = JSON.parse(rawdata);
    
    if(questions.length < 1){
      message.channel.send("no more questions")
    }else{
      message.channel.send(questions.toString())
    }
  }
}