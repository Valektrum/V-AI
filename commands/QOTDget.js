module.exports = {
  name: 'QOTDget',
  description: 'get a question of the day',
  get() {
    const fs = require("fs");
    let rawdata = fs.readFileSync('./questions.json');
    let questions = JSON.parse(rawdata);

    if(questions.length > 0){
      let nb = (Math.random() * questions.length);
      let question = questions.splice(nb, 1);

      let data = JSON.stringify(questions);
      fs.writeFileSync('./questions.json', data);

      console.log("Sending question: " + question);
      return [question, questions.length];
    }else{
      return "..I don't have any more questions! Let me think of new ones and I'll make sure to send one tomorrow! Sorry >.<"
    }
    

  }
}