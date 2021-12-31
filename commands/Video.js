module.exports = {
  name: 'Video',
  description: 'The best content that you can get.',
  execute(message) {
    var number = Math.floor(Math.random() * 10) + 1;
    switch (number) {
      case 1:
        message.channel.send("https://www.youtube.com/watch?v=ywzU_5HEOI0");
        break;
      case 2:
        message.channel.send("https://www.youtube.com/watch?v=eR2TJfyMYAo");

        break;
      case 3:
        message.channel.send("https://www.youtube.com/watch?v=Sm0pgWYyl4Q");

        break;
      case 4:
        message.channel.send("https://www.youtube.com/watch?v=4D4dQsWU0Ks");

        break;
      case 5:
        message.channel.send("https://www.youtube.com/watch?v=iUx5ovWwTIk");

        break;
      case 6:
        message.channel.send("https://www.youtube.com/watch?v=DUO-22B9mzE");

        break;
      case 7:
        message.channel.send("https://www.youtube.com/watch?v=xk07i83zkXs&t=74s");

        break;
      case 8:
        message.channel.send("https://www.youtube.com/watch?v=cfauZiTNET4");

        break;
      case 9:
        message.channel.send("https://www.youtube.com/watch?v=AhoucHjnJdM");

        break;
      case 10:
        message.channel.send("https://www.youtube.com/watch?v=WSAmnfr6TZY");

        break;

    }
    return;


  }
}