
module.exports = {
  name: 'Face',
  description: 'Make a poll, but the reactions are faces',
  execute(msg) {
    const args = msg.content.split(',');
    args[0] = args[0].substring(9);
    if (args[0] == "") {
      msg.channel.send("Bakayaro...🤦‍♀️");
      return;
    }
    msg.channel.send(args[0]).then(sentMsg => {
      sentMsg.react("281973000960737280")
        .then(() => sentMsg.react("281973000960737280"))//pat
        .then(() => sentMsg.react("713554314307698728"))//guisou
        .then(() => sentMsg.react("456587527881621516"))//vincent
        .then(() => sentMsg.react("362035701472034818"))//pierluc
        .then(() => sentMsg.react("462661634171863040"))//xav
        .then(() => sentMsg.react("281914140895870977"))//gupta
        .then(() => sentMsg.react("402591785362259975"))//catherine
        .then(() => sentMsg.react("366738608008200192"))//lea
        .then(() => sentMsg.react("389969508468523008"))//michaud
        .then(() => sentMsg.react("♥"));
      ;

    })
    return;
  }
}
