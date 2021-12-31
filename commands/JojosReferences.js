
module.exports = {
    name: 'JojosReferences',
    description: 'This brings jojo gifs when I hear a reference to jojo.',
    execute(msg) {
        var message = msg.content.toLowerCase();
        if (message === "nice") {
            msg.channel.send("https://tenor.com/view/joseph-joestar-nice-gif-7319727");
        }
        else if (message.search("yes yes yes") != -1) {
            msg.channel.send("https://giphy.com/gifs/iP8P6sbQTrmMM");
        }
        else if (message === "yes i am" || message === "yes! i am"
            || message === "yes, I am" || message === "yes i am!") {
            msg.channel.send("https://tenor.com/uiE7.gif");
        }
        else if (message.search("yare yare") != -1) {
            msg.channel.send("https://tenor.com/Zxc7.gif");

        }
        else if (message == "wha" || message == "wha-") {
            msg.channel.send("wha- ");
            msg.channel.send("https://tenor.com/bbHPk.gif");
        }
        else if (message.search("wryy") != -1) {
            msg.channel.send("https://tenor.com/w3rT.gif");

        }
        else if (message.search("hello there") != -1) {
            msg.channel.send("https://media2.giphy.com/media/8JTFsZmnTR1Rs1JFVP/giphy.gif?cid=ecf05e47yr9b29f69eg4z5bzrlm61tuvncio0s7fw22ydjgn&rid=giphy.gif")
        }
        else if (message.search("i have the high ground") != -1) {
            msg.channel.send("https://media1.tenor.com/images/fcee30f89d7dc3347306c5fb44870ad0/tenor.gif?itemid=16385949")
        }


    }
}