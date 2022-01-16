module.exports = {
  name: 'Music_help',
  description: 'Show all availables commands.',
  execute(message) {
      const Discord = require('discord.js');

      const embed = new Discord.MessageEmbed()
          .setColor('#c73954')
          .setTitle("That's right, I play music now! Here are the available commands")
          .addFields(
            { name: "-play [url or query]", value: "Play the desired music or add it in the queue" },
            { name: "-search [query]", value: "Search for the right youtube video and then type -play followed by the right video url!" },
            { name: "-queue", value: "See the current queue!" },
            { name: "-skip", value: "Don't want to listen to this music? Skip it!" },
            { name: "-stop", value: "You want me to stop playing music and leave? Just do it, it's not like I care or anything..." },
          )

      message.channel.send(embed);
  }
}