module.exports = {
  name: 'QOTDadd',
  description: 'add a question to the QOTD',
  add(message, filePath) {
    const fs = require("fs");
    let rawdata = fs.readFileSync(filePath);
    let questions = JSON.parse(rawdata);

    var question = message.content.substring(9, message.content.length);

    questions.push(question);

    message.channel.send("Added question: " + question);
    let data = JSON.stringify(questions);
    fs.writeFileSync(filePath, data);

  },
}