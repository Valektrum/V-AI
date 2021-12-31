const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');

//process.env.LEAGUE_API_PLATFORM_ID = 'na1'
//process.env.LEAGUE_API_KEY = 'ENTER-KEY-HERE'
const token = process.env.DISCORD_TOKEN;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Hello human');
    client.user.setActivity("-help for my commands!");
});


client.on('message', message => {
    if (message.author.bot) return;
    var lowerCaseMessage = message.content.toLowerCase();

    //for debugging
    // message.channel.send(message.author.username);


    if (lowerCaseMessage.search("-welcome") != -1) {
        message.channel.send("Hello and welcome among the unsummoners!");
        message.channel.send("We hope you'll enjoy your time with us.");
        message.channel.send("If you have any question related to this server, please contact <@!" + client.users.cache.get("188293233313316864") + ">.");
    }

    else if (lowerCaseMessage == "owo") {
        message.channel.send("uwu");
    }

    else if (lowerCaseMessage == "uwu") {
        message.channel.send("owo");
    }

    else if (message.content.toLowerCase().search("psps") != -1) {
        xav = "<@!188315934719475712>";
        message.channel.send(xav);
    }

    else if (lowerCaseMessage == "-coin") {
        client.commands.get('FlipCoin').execute(message);

    }
    else if (lowerCaseMessage.search("-number") != -1) {
        client.commands.get('Number').execute(message)
    }
    else if (lowerCaseMessage == "-headpat") {
        client.commands.get('Headpat').execute(message);
    }
    else if (lowerCaseMessage == "-help") {
        client.commands.get('Help').execute(message);
    }
    else if (lowerCaseMessage == "-video") {
        client.commands.get('Video').execute(message);
    }
    else if (lowerCaseMessage.search("-pollface") != -1) {
        client.commands.get('Face').execute(message);
    }
    else if (lowerCaseMessage.search("-poll") != -1) {
        client.commands.get('Poll').execute(message);
    }
    else if (lowerCaseMessage.search("violet") != -1 ||
        lowerCaseMessage.search("<@!735627552055492648>") != -1) {
        client.commands.get('SelfAware').execute(message);
    }
    else if (lowerCaseMessage.search("i'm") != -1) {
        client.commands.get('HiSomethingImDad').execute(message);
    }
    else {
        client.commands.get('Reactions').execute(message);
        client.commands.get('JojosReferences').execute(message);
        client.commands.get('League').execute(message);

    }

})

client.login(token);