const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');
const cron = require('cron');

const token = process.env.DISCORD_TOKEN;
const key = process.env.LEAGUE_API_KEY;
const questionsFile = process.env.QUESTIONS_FILE_PATH || './questions.json';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



let mainChannel = "";

client.once('ready', () => {
    console.log('Hello human');
    client.user.setActivity("-help for my commands!");

    //client.channels.fetch('542107482210828298') //test channel
    client.channels.fetch('188295120276291584')
    .then(function(channel){
        mainChannel = channel;

        let scheduledMessage = new cron.CronJob('00 00 17 * * *', () => {

            let values = client.commands.get('QOTDget').get(questionsFile);
                  
            let questionnb;
            if(values[1] <= 1){
                questionnb = "question";
            }else{
                questionnb = "questions";
            }
            
            const embed = new Discord.MessageEmbed()
                  .setColor('#c73954')
                  .setTitle("❓❔ Question of the Day ❔❓")
                  .setDescription(values[0])
                  .setFooter(values[1] + ' ' + questionnb + ' left');
    
            mainChannel.send(embed);
        });
          
        scheduledMessage.start()
    });

    
});



client.on('message', message => {
    try {
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
    else if(message.author.id == 188293233313316864){
        if (lowerCaseMessage.search("-post") != -1) {
            client.commands.get('post').post(message, mainChannel);
    
        }
        else if (lowerCaseMessage.search("-qotdgetall") != -1) {
            client.commands.get('QOTDgetAll').get(message, questionsFile);
    
        }
        else if (lowerCaseMessage.search("-qotdmpost") != -1) {
            client.commands.get('QOTDpost').post(message, mainChannel);
    
        }
        else if (lowerCaseMessage.search("-qotdadd") != -1) {
            client.commands.get('QOTDadd').add(message, questionsFile);
    
        }
        else if (lowerCaseMessage.search("-qotdpost") != -1) {
            let values = client.commands.get('QOTDget').get(questionsFile);
                      
            let questionnb;
            if(values[1] <= 1){
                questionnb = "question";
            }else{
                questionnb = "questions";
            }
    
            const embed = new Discord.MessageEmbed()
                      .setColor('#c73954')
                      .setTitle("❓❔ Question of the Day ❔❓")
                      .setDescription(values[0])
                      .setFooter(values[1] + ' ' + questionnb + ' left');
    
            mainChannel.send(embed);
        }
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
    } else if (lowerCaseMessage.search("-summoner") != -1) {
        client.commands.get('League').execute(message, key);
    }
    else {
        client.commands.get('Reactions').execute(message);
        client.commands.get('JojosReferences').execute(message);

    }
    } catch (error) {
        console.log(error);
        let rand = Math.random() * 10
        if(rand > 5){
            message.channel.send("Hmm... I don't quite understand that.");
        }else{
            message.channel.send("Hmmmm... I'm stupid, sorry >.<'");
        }
        client.users.fetch('188293233313316864', false).then((user) => {
            user.send("OUPS, we did a fuckie wokie uwu,  here's the shit, go fix it, dumbass: " + error.toString());
           });
    }
    

})

client.login(token);