module.exports = {
  name: 'QOTDgetAll',
  description: 'get all questions',
  get(message, filePath) {
    const fs = require("fs");
    let rawdata = fs.readFileSync(filePath);
    let questions = JSON.parse(rawdata);
    
    message.channel.send(questions.toString())

  }
}