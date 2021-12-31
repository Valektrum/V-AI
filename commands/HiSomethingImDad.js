module.exports = {
    name: 'HiSomethingImDad',
    description: 'This is your mainstream dad joke.',
    execute(message) {

        var index = message.content.toLowerCase().search("i'm");
        if (index != -1) {
            if (message.content.toLowerCase().search("i'm, i'm") != -1 ||
                message.content.toLowerCase().search("i'm i'm") != -1) {
                message.reply("Nice try");
            }
            else {
                let rand = (Math.random() * 100);
                if(rand > 94){
                    var name = message.content.substring(index + 3, message.content.length);
                    message.channel.send("Hi" + name + ", I'm dad.");
                }
            }

        }
    }
}