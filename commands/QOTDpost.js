module.exports = {
  name: 'QOTDpost',
  description: 'post a qotd manually',
  post(message, mainChannel) {
    const Discord = require('discord.js');
    var question = message.content.substring(11, message.content.length);

    const embed = new Discord.MessageEmbed()
    .setColor('#c73954')
    .setTitle("❓❔ Question of the Day ❔❓")
    .setDescription(question);

    mainChannel.send(embed);    
  }
}