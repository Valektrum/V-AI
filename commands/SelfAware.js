module.exports = {
    name: 'SelfAware',
    description: 'This is just a prank.',
    execute(msg) {
        //sleep
        const { promisify } = require('util')
        const sleep = promisify(setTimeout)

        //variables
        var message = msg.content.toLowerCase();
        var number = Math.floor(Math.random() * 10) + 1;
        var now = new Date();
        var time = new Date();

        //hello

        //how are you
        if (message.search("how are you") != -1) {
            if (number == 1) {
                msg.channel.send("Better since you're here! ");
                msg.channel.send("https://tenor.com/IX1i.gif");

            }
            else if (number < 4) {
                msg.channel.send("I'm doing great! And happy to see you uwu");
                msg.channel.send("https://tenor.com/baJZs.gif");

            }
            else if (number < 7) {
                msg.channel.send("I'm good, thanks! :smiley_cat: ");

            }
            else if (number < 11) {
                msg.channel.send("I'm fine, and you? :smile_cat: ");

            }

        }
        //who are you
        else if (message.search("who are you") != -1) {
            msg.channel.send("I'm your humble servant, master! ");
            msg.channel.send("https://media1.tenor.com/images/4f6a768fdd51094008e8d288bd80c632/tenor.gif?itemid=17724253");
        }
        //do you love me
        else if (message.search("do you love me") != -1) {
            msg.channel.send("...");
            var number = Math.floor(Math.random() * 10) + 1;
            sleep(2000).then(() => {
                if (number < 9) {
                    msg.channel.send("I.. only see you as a friend.");

                }
                else {
                    msg.channel.send("yes..");
                    msg.channel.send("https://tenor.com/bfVsv.gif");

                }
            })
        }
        //Do you like me
        else if (message.search("do you like me") != -1) {
            var number = Math.floor(Math.random() * 10) + 1;
            if (number < 6) {
                msg.channel.send("Yes!");

            }
            else {
                msg.channel.send("Of course! I like everyone here :D");
            }

        }
        //how old are you
        else if (message.search("how old are you") != -1) {
            msg.channel.send("Old enough uwu");
            msg.channel.send("https://media1.tenor.com/images/6028cea0c71ca6d2ee7474a25c0e84b0/tenor.gif?itemid=12707659");
        }
        //good night
        else if (message.search("good night") != -1 ||
            message.search("goodnight") != -1) {
            var number = Math.floor(Math.random() * 10) + 1;
            if (number < 4) {
                msg.channel.send("Good night! See you tomorrow! :)");
            }
            else if (number < 7) {
                msg.channel.send("May tomorrow be sunny and full of joy. Good night! :kissing_cat: ");
            }
            else if (number < 15) {
                msg.channel.send("I wish you have the sweetest dream of your life tonight. Goodnight!");
            }
        }
        else if (message.search("do you like jojo") != -1) {
            msg.channel.send("Yes");

        }
        //do you YES NO QUestion
        else if (message.search("do you") != -1) {
            if (number < 6) {
                msg.channel.send("No");
            }
            else {
                msg.channel.send("Yes");
            }
        }
        else if (message.search("hello") != -1 ||
            message.search("hey") != -1 ||
            message.search("hi") != -1 ||
            message.search("Bonjour") != -1 ||
            message.search("salut") != -1) {

            if (now < time.setHours(12)) {
                if (number < 6) {
                    msg.channel.send("Ohayou " + msg.author.username + " :smile_cat: ");
                }
                else {
                    msg.channel.send("Good morning " + msg.author.username + " :smile_cat: ");
                }
            }
            else if (number < 3) {
                msg.channel.send("Hello " + msg.author.username + "!");

            }
            else if (number < 5) {
                msg.channel.send("Hi " + msg.author.username + "!");

            }
            else if (number < 8) {
                msg.channel.send("Heyy!");
                msg.channel.send("https://media1.tenor.com/images/ec86c1ad73bb36b8be28e1076f50afda/tenor.gif?itemid=17143662");

            }
            else if (number < 11) {
                msg.channel.send("Konnichiwa " + msg.author.username + " :cherry_blossom: ");

            }
        }
        return;
    }
}