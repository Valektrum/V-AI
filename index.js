const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');
const cron = require('cron');

const token = process.env.DISCORD_TOKEN;
const key = process.env.LEAGUE_API_KEY;
const xivApiKey = process.env.XIV_API_KEY;
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

        let scheduledMessage = new cron.CronJob('00 00 12 * * *', sendQuestion);
        //Every 30 seconds for testing
        //let scheduledMessage = new cron.CronJob('*/30 * * * * *', sendQuestion);

        scheduledMessage.start()
    });

    
});



client.on('message', message => {
    try {
        if (message.author.bot) return;
    var lowerCaseMessage = message.content.toLowerCase();

    //for debugging
    // message.channel.send(message.author.username);

    if (lowerCaseMessage.startsWith("-welcome")) {
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

    else if (message.content.toLowerCase().search("pspsps") != -1) {
        xav = "<@!188315934719475712>";
        message.channel.send(xav);
    }
    else if (lowerCaseMessage.startsWith("-coin")) {
        client.commands.get('FlipCoin').execute(message);

    }
    else if (lowerCaseMessage.startsWith("-number")) {
        client.commands.get('Number').execute(message)
    }
    else if (lowerCaseMessage.startsWith("-headpat")) {
        client.commands.get('Headpat').execute(message);
    }
    else if (lowerCaseMessage.startsWith("-help")) {
        client.commands.get('Help').execute(message);
    }
    else if (lowerCaseMessage.startsWith("-video")) {
        client.commands.get('Video').execute(message);
    }
    else if (lowerCaseMessage.startsWith("-pollface")) {
        client.commands.get('Face').execute(message);
    }
    else if (lowerCaseMessage.startsWith("-poll")) {
        client.commands.get('Poll').execute(message);
    }
    else if (lowerCaseMessage.startsWith("-play") ||
     lowerCaseMessage.startsWith("-skip") ||
     lowerCaseMessage.startsWith("-stop") ||
     lowerCaseMessage.startsWith("-search") || 
     lowerCaseMessage.startsWith("-musicDebug") ||
     lowerCaseMessage.startsWith("-queue")) {
         //return;
        const args = message.content.split(/ +/);
        client.commands.get('Music').execute(message, args, args[0], client);
    }
    else if (lowerCaseMessage.startsWith("-music")) {
        client.commands.get('Music_help').execute(message);
    }
    else if (lowerCaseMessage.startsWith("-ffxiv")) {
        client.commands.get("ffxiv").execute(message, xivApiKey)
    }
    else if (lowerCaseMessage.search("violet") != -1 ||
        lowerCaseMessage.search("<@!735627552055492648>") != -1) {
        client.commands.get('SelfAware').execute(message);
    }
    else if (lowerCaseMessage.startsWith("-summoner")) {
        client.commands.get('League').execute(message, key);
    }
    else if (lowerCaseMessage.startsWith("-qotdadd")) {
        client.commands.get('QOTDadd').add(message, questionsFile);
    }
    else {
        if(message.author.id == 188293233313316864){
            if (lowerCaseMessage.startsWith("-post")) {
                client.commands.get('post').post(message, mainChannel);
        
            }
            else if (lowerCaseMessage.startsWith("-qotdgetall")) {
                client.commands.get('QOTDgetAll').get(message, questionsFile);
        
            }
            else if (lowerCaseMessage.startsWith("-qotdmpost")) {
                client.commands.get('QOTDpost').post(message, mainChannel);
        
            }
            else if (lowerCaseMessage.startsWith("-qotdpost"))
                sendQuestion();
        }
        client.commands.get('Reactions').execute(message);
        client.commands.get('JojosReferences').execute(message);
        if (lowerCaseMessage.search("i'm") != -1) {
            client.commands.get('HiSomethingImDad').execute(message);
        } 

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

function sendQuestion(){
    try{
        let values = client.commands.get('QOTDget').get(questionsFile);
              
        let questionnb;

        //No more questions
        if(!values)
          return;

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

    }catch(error){
        console.log(error);
        client.users.fetch('188293233313316864', false).then((user) => {
        user.send("OUPS, we did a fuckie wokie uwu,  here's the shit, go fix it, dumbass: " + error.toString());
        });
    }
}