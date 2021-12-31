const DataDragonHelper = require('leaguejs/lib/DataDragon/DataDragonHelper');

module.exports = {
  name: 'League',
  description: 'LoL stuff',
  execute(msg) {
    const Discord = require('discord.js');

    const LeagueJS = require('../node_modules/leaguejs/lib/LeagueJS.js');
    const leagueJs = new LeagueJS(process.env.LEAGUE_API_KEY);

    const championsJson = require('../champion.json');

    const args = msg.content.slice(1).trim().split(/ +/);
    var lowerCaseMessage = msg.content.toLowerCase();

    var number = Math.floor(Math.random() * 10) + 1;
    var response = "";

    if (lowerCaseMessage.startsWith("-summoner")) {
      if (args[1]) {
        var summonerName = args[1];
        var summoner;
        var league;
        var championMastery;

        leagueJs.Summoner.gettingByName(summonerName)
          .then(data => {
            summoner = data;
            leagueJs.League.gettingEntriesForSummonerId(summoner.id)
              .then(data => {
                league = data;
                leagueJs.ChampionMastery.gettingBySummoner(summoner.id)
                  .then(data => {
                    championMastery = data;

                    var description = `Level ${summoner.summonerLevel}`;
                    var fiels = [];
                    if (league.length > 0) {
                      for (var i = 0; i < league.length; i++) {
                        var obj = league[i];
                        if (obj.queueType == "RANKED_SOLO_5x5") {
                          fiels.push({ name: "Ranked Solo/Duo", value: `${obj.tier} ${obj.rank} ${obj.leaguePoints}lp, ${Math.floor(obj.wins / (obj.wins + obj.losses) * 100)}% winrate` })
                        } else if (obj.queueType == "RANKED_FLEX_SR") {
                          fiels.push({ name: "Ranked flex", value: `${obj.tier} ${obj.rank} ${obj.leaguePoints}lp, ${Math.floor(obj.wins / (obj.wins + obj.losses) * 100)}% winrate` })

                        }
                      }
                    }

                    if (championMastery.length > 2) {
                      var bestChampions = "";
                      for (var i = 0; i < 3; i++) {
                        var obj = championMastery[i];
                        var championName;
                        for (let [key, value] of Object.entries(championsJson.data)) {
                          if (obj.championId == value.key) {
                            championName = value.name;
                          }
                        }
                        bestChampions += `${championName}, ${obj.championPoints}pts \n`
                      }
                      fiels.push({ name: "Best Champions", value: bestChampions })

                    }


                    const embed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(summoner.name)
                      .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/11.9.1/img/profileicon/${summoner.profileIconId}.png`)
                      .setDescription(description)
                      .setURL(`https://na.op.gg/summoner/userName=${summonerName}`)
                      .addFields(fiels);

                    msg.channel.send(embed);
                  })

              })

          }, error => {
            if (number < 3) {
              response = "Ummm... I don't think this summoner exists, sorry 😣";
            }
            else if (number < 7) {
              response = "You spelled it wrong, lol 😌";
            } else {
              response = "This summoner doesn't exists.";
            }
            msg.channel.send(response);
          });

      }

    }

    return;
  }
}
