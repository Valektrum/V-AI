module.exports = {
  name: 'QOTDget',
  description: 'get a question of the day',
  get(filePath) {
    const fs = require("fs");
    let rawdata = fs.readFileSync(filePath);
    let questions = JSON.parse(rawdata);

    if(questions.length > 0){
      let nb = (Math.random() * questions.length);
      let question = questions.splice(nb, 1);

      let data = JSON.stringify(questions);
      fs.writeFileSync(filePath, data);

      console.log("Sending question: " + question);
      return [question, questions.length];
    }else{
      return null;//"It's noon.. and I'm all out of questions! Let me think of new ones, or send some to my secretary, and I'll make sure to send one tomorrow! Sorry >.<"
    }
    

  }
}