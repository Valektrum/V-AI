
module.exports = {
  name: 'Poll',
  description: 'Make a poll!',
  execute(msg) {
    const args = msg.content.split(',');
    args[0] = args[0].substring(5);

    if (args.length < 12 && args.length > 1) {
      const numbers = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣",
        "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];

      var message = args[0] + "\n";

      for (j = 0; j < args.length - 1; j++) {
        message += numbers[j] + " - " + args[j + 1] + "\n";
      }

      msg.channel.send(message).then(sentMsg => {
        try {
          for (i = 0; i < args.length - 1; i++) {
            sentMsg.react(numbers[i]);
          }
        } catch (error) {
          console.error(error.message);
        }
      });
    }
    else if (args.length == 1 && args[0] != "") {
      msg.channel.send(args[0]).then(sentMsg => {

        sentMsg.react("538921175267409930").then(() =>//upvote
          sentMsg.react("538921451747672064"));//downvote
      });
    }
    else {
      msg.channel.send("Sowwy something wwong happened...");

    }
    return;
  }
}