module.exports = {
    name: 'FlipCoin',
    description: 'Flip a coin!.',
    execute(message) {

        const { promisify } = require('util');
        const sleep = promisify(setTimeout);

        var number = Math.floor(Math.random() * 10) + 1;
        message.channel.send("*throws coin*");
        message.channel.send("https://tenor.com/3448.gif");
        sleep(2000).then(() => {
            if (number % 2 == 0) {
                message.channel.send("**Tail!**");
            }
            else {
                message.channel.send("**Head!**");
            }
        })
        return;
    }
}