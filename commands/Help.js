module.exports = {
    name: 'Help',
    description: 'Show all availables commands.',
    execute(message) {
        const Discord = require('discord.js');

        const embed = new Discord.MessageEmbed()
            .setColor('#c73954')
            .setTitle('Here is all the currently available commands!')
            .addFields(
                { name: "-music", value: "Enter this command to see the music-related commands!" },
                { name: "-summoner [name]", value: 'Search for a league of legend account!' },
                { name: "-ffxiv", value: "enter this command to see ffxiv-related commands!" },
                { name: "-coin", value: 'Flip a coin!' },
                { name: "-number [min] [max]", value: "Want me to give you a number? Type this command followed by your desired interval (ex: -number 2 4). If you do not give me an interval, I'll give you a number between 1 and 10! ^^'" },
                { name: "-headpat", value: "Show a random (but handpicked) headpat picture" },
                { name: "-video", value: "The best content you can get." },
                { name: "-poll [description], [option1], [option2], ...", value: "Create a poll. Be carefull with the syntax, I need the commas. If you do not give options, it will be a yes no poll." },
                { name: "-pollFace description", value: "Create a poll, but with beautiful faces. owo" },
                { name: "Question of the Day!", value: "I will send a question everyday at 12:00!" },
                { name: "Various references", value: "Try and find them!" },
                { name: "Cool reactions", value: "I'll automatically react if I read something special." },
                { name: "Self-awareness", value: "I can be your waifu if you want... jk lol loser.. unless? >///<" },

            )

        message.channel.send(embed);
    }
}