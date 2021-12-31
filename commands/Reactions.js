
module.exports = {
    name: 'Reactions',
    description: 'This makes violet react automatically to some message when there is a certain keyword.',
    execute(msg) {
        var message = msg.content.toLowerCase();
        if (message.search("ligma") != -1 ||
            message.search("corona") != -1 ||
            message.search("covid") != -1) {
            msg.react("🦀");
        }
        else if (message.search("pogger") != -1) {
            msg.react("709571741273292840");
        }
        else if (message.search("fucking weeb") != -1) {
            msg.react("525775709705338880");

        }

    }
}