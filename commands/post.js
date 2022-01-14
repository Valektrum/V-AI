module.exports = {
  name: 'post',
  description: 'answer manually',
  post(message, mainChannel) {
    var mes = message.content.substring(6, message.content.length);

    mainChannel.send(mes);    
  }
}