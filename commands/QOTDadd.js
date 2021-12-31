module.exports = {
  name: 'QOTDadd',
  description: 'add a question to the QOTD',
  add(message) {
    const fs = require("fs");
    let rawdata = fs.readFileSync('./questions.json');
    let questions = JSON.parse(rawdata);

    var question = message.content.substring(9, message.content.length);

    questions.push(question);

    let data = JSON.stringify(questions);
    fs.writeFileSync('./questions.json', data);

  },
}