const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");

const queue = new Map();

//Big yoink https://www.youtube.com/watch?v=riyHsgI2IDs
module.exports = {
  name: "Music",
  aliases: ["skip", "stop"],
  cooldown: 0,
  description: "Advanced music bot",
  async execute(message, args, cmd, client) {
    try {
      const Discord = require("discord.js");
      var added_by_url = false;

      //remove the cmd
      args.shift();

      const voice_channel = message.member.voice.channel;
      if (!voice_channel)
        return message.channel.send(
          "You need to be in a channel to execute this command!"
        );
      const permissions = voice_channel.permissionsFor(message.client.user);
      if (!permissions.has("CONNECT"))
        return message.channel.send("You dont have the correct permissions");
      if (!permissions.has("SPEAK"))
        return message.channel.send("You dont have the correct permissions");

      const server_queue = queue.get(message.guild.id);

      if (cmd.search("-play") != -1) {
        if (!args.length) {
          return message.channel.send(
            "Play what? 😾 Give me something to play!"
          );
        }
        let song = {};

        if (ytdl.validateURL(args[0])) {
          const song_info = await ytdl.getInfo(args[0]);
          song = {
            title: song_info.videoDetails.title,
            url: song_info.videoDetails.video_url,
          };
          added_by_url = true;
        } else {
          const video_finder = async (query) => {
            const video_result = await ytSearch(query);
            return video_result.videos.length > 1
              ? video_result.videos[0]
              : null;
          };

          const video = await video_finder(args.join(" "));
          if (video) {
            song = { title: video.title, url: video.url };
          } else {
            message.channel.send(
              "Hmm.. something went wrong, I couldn't find your video. Sorry!"
            );
          }
        }

        if (!server_queue) {
          const queue_constructor = {
            voice_channel: voice_channel,
            text_channel: message.channel,
            connection: null,
            songs: [],
          };

          queue.set(message.guild.id, queue_constructor);
          queue_constructor.songs.push(song);

          try {
            const connection = await voice_channel.join();
            queue_constructor.connection = connection;
            video_player(
              message.guild,
              queue_constructor.songs[0],
              !added_by_url
            );
          } catch (err) {
            queue.delete(message.guild.id);
            message.channel.send("There was an error connecting!");
            throw err;
          }
        } else {
          server_queue.songs.push(song);
          var msg = `**${song.title}** added to queue! 😸`;
          if (!added_by_url) {
            msg += ` ${song.url}`;
          }
          message.channel.send(msg);
          return;
        }
      } else if (cmd.search("-skip") != -1) skip_song(message, server_queue);
      else if (cmd.search("-stop") != -1) stop_song(message, server_queue);
      else if (cmd.search("-search") != -1) search_song(message, args, Discord);
      else if (cmd.search("-queue") != -1)
        get_queue(message, server_queue, Discord);
    } catch (error) {
      console.log(error);
      let rand = Math.random() * 10;
      if (rand > 5) {
        message.channel.send("Hmm... I don't quite understand that.");
      } else {
        message.channel.send("Hmmmm... I'm stupid, sorry >.<'");
      }
      client.users.fetch("188293233313316864", false).then((user) => {
        user.send(
          "OUPS, we did a fuckie wokie uwu,  here's the shit, go fix it, dumbass: " +
            error.toString()
        );
      });
    }
  },
};

const video_player = async (guild, song, show_url) => {
  const song_queue = queue.get(guild.id);

  if (!song) {
    song_queue.voice_channel.leave();
    queue.delete(guild.id);
    return;
  }
  const stream = ytdl(song.url, { filter: "audioonly" });
  song_queue.connection
    .play(stream, { seek: 0, volume: 0.5 })
    .on("finish", () => {
      song_queue.songs.shift();
      video_player(guild, song_queue.songs[0]);
    });
  var msg = `🎵 Now playing **${song.title}** 🎵 `;
  if (show_url) {
    msg += " " + song.url;
  }
  await song_queue.text_channel.send(msg);
  let rand = Math.floor(Math.random() * 13);

  if (rand == 12) {
    setTimeout(() => {
      song_queue.text_channel.send("..That's some good shit!");
    }, 2000);
  } else if (rand == 11) {
    song_queue.text_channel.send(
      "https://tenor.com/view/anime-singing-making-a-song-gif-13451239"
    );
  } else if (rand == 10) {
    song_queue.text_channel.send("https://tenor.com/baC2q.gif");
  } else if (rand == 9) {
    song_queue.text_channel.send("https://tenor.com/bkLk8.gif");
  }
};

const skip_song = (message, server_queue) => {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You need to be in a channel to execute this command!"
    );
  if (!server_queue) {
    return message.channel.send(`I can't skip **nothing**... 🤦‍♀️`);
  }
  server_queue.connection.dispatcher.end();
  //"Cannot read property end of null"
};

const stop_song = (message, server_queue) => {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You need to be in a channel to execute this command!"
    );
  if (!server_queue) {
    message.channel.send(`I'm not even playing music...!`);
    message.channel.send("https://tenor.com/bnWhG.gif");
    return;
  }
  server_queue.songs = [];
  console.log("a");
  server_queue.connection.dispatcher.end();
};

const search_song = async (message, args, Discord) => {
  if (!args.length) {
    return message.channel.send(
      "Search for what? 😾 Give me something to search for!"
    );
  }
  if (!message.member.voice.channel)
    return message.channel.send(
      "You need to be in a channel to execute this command!"
    );
  const video_finder = async (query) => {
    const video_result = await ytSearch(query);
    return video_result.videos.length > 1 ? video_result.videos : null;
  };

  const video = await video_finder(args.join(" "));
  if (video) {
    const embed = new Discord.MessageEmbed()
      .setColor("#c73954")
      .setTitle("Here are your search results!");

    for (var i = 0; i < 5; i++) {
      var song = video[i];
      embed.addField(`${song.title}`, song.url + "\n \n");
    }

    message.channel.send(embed);
  } else {
    message.channel.send(
      "Hmm.. something went wrong, I couldn't find your video. Sorry!"
    );
  }
};

const get_queue = (message, server_queue, Discord) => {
  if (!server_queue) {
    message.channel.send(`Bruh... there is not even a queue...`);
    return;
  }

  const embed = new Discord.MessageEmbed()
    .setColor("#c73954")
    .setTitle("Here is the current queue!");

  embed.addField(
    `🎵 **NOW PLAYING**: ${server_queue.songs[0].title}`,
    server_queue.songs[0].url + "\n"
  );
  for (var i = 2; i <= server_queue.songs.length; i++) {
    var song = server_queue.songs[i - 1];
    embed.addField(`${i}: ${song.title}`, song.url + "\n");
  }

  message.channel.send(embed);
};
