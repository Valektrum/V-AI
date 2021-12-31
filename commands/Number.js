module.exports = {
    name: 'Number',
    description: 'Gives out a number',
    execute(message) {

        const { promisify } = require('util');
        const sleep = promisify(setTimeout);
        const args = message.content.slice(1).trim().split(/ +/);

        if (args.length == 1) { //give number between 1 and 10
            var number = Math.floor(Math.random() * 10) + 1;
            message.channel.send("Here's your number: " + number);

        }
        else if (args.length == 3) { //give number between given interval
            if (isNaN(args[1]) || isNaN(args[2])) {
                message.channel.send("You need to give me two numbers... BAKA!");
                return;
            }
            if (args[1] > args[2]) {
                const temp = args[2];
                args[2] = args[1];
                args[1] = temp;
            }
            const min = Math.ceil(args[1]);
            const max = Math.floor(args[2]);

            var number = Math.floor(Math.random() * (max - min + 1)) + min;
            message.channel.send("And your number is...")
            sleep(1000).then(() => {
                message.channel.send(number);
            })

        }
        else {
            message.channel.send("Umm.. I'm too dumb. Try again.");
            message.channel.send("https://media1.tenor.com/images/73afb40f4becbab10aee349b75a6b4ab/tenor.gif?itemid=12069252");

        }
        return;
    }
}