const XIVAPI = require("@xivapi/js")
const Discord = require('discord.js');
const fetch = require("cross-fetch")

const combatEmotes = {
    Gladiator: "<:gladiator:940064173927333889>",
    Paladin: "<:paladin:940064174355132449>",
    Marauder: "<:marauder:940064174204149760>",
    Warrior: "<:warrior:940064174258663455>",
    'Dark Knight': "<:darkknight:940064174329962516>",
    Gunbreaker: "<:gunbreaker:940064173109424168>",
    Conjurer: "<:conjurer:940064173881171968>",
    'White Mage': "<:whitemage:940064174090891274>",
    Scholar: "<:scholar:940064174103486464>",
    Astrologian: "<:astrologian:940064172400582657>",
    Sage: "<:sage:940066569831211019>",
    Pugilist: "<:pugilist:940064174145433712>",
    Monk: "<:monk:940064174061547541>",
    Lancer: "<:lancer:940064174225125477>",
    Dragoon: "<:dragoon:940064174015393842>",
    Rogue: "<:rogue:940064173843415051>",
    Ninja: "<:ninja:940064174254477392>",
    Samurai: "<:samurai:940064174174789642>",
    Reaper: "<:reaper:940067321039446037>",
    Archer: "<:archer:940064172190867477>",
    Bard: "<:bard:940064173705027584>",
    Machinist: "<:machinist:940064174439006218>",
    Dancer: "<:dancer:940064172920688640>",
    Thaumaturge: "<:thaumaturge:940064174300618773>",
    'Black Mage': "<:blackmage:940064173667270746>",
    Arcanist: "<:arcanist:940064171863711785>",
    Summoner: "<:summoner:940064174145429584>",
    'Red Mage': "<:redmage:940064174296404008>",
    'Blue Mage (Limited Job)': "<:bluemage:940064173537230889>",
}

module.exports = {
    name: "ffxiv",
    description: "FFXIV Stuff",
    execute(msg, key) {
        try {
            let characterId = null

            if (msg.content.toLowerCase().search("yui") != -1) {
                characterId = "32234189"
            } else if (msg.content.toLowerCase().search("violet") != -1) {
                characterId = "32206998"
            } else if (msg.content.toLowerCase().search("seika") != -1) {
                characterId = "32235141"
            }

            if (characterId === null) {
                const embed = new Discord.MessageEmbed()
                    .setColor("#c73954")
                    .setTitle("Commands about the critically aclaimmed MMORPG Final Fantasy XIV")
                    .addFields([
                        {
                            name: "-ffxiv [character_name]",
                            value: "Show a picture of your character"
                        },
                        {
                            name: "-ffxiv level [character_name]",
                            value: "Shows the levels of your character",
                        },
                        {
                            name: "-ffxiv progress [character_name]",
                            value: "Shows how much stuff you've done in the game"
                        }
                    ])
                    .setFooter("\*Possible character names are Violet, Yui and Seika. (Yes they are hardcoded... what are you gonna do about it?)")

                msg.channel.send(embed)
                return
            }

            const xivapi = new XIVAPI({
                private_key: key,
                snake_case: true,
            })

            xivapi.character.get(characterId)
                .then(data => {
                    lodestoneCharacter = data.character

                    var requestOptions = {
                        method: 'GET',
                        redirect: 'follow'
                    };

                    fetch(`https://ffxivcollect.com/api/characters/${characterId}`, requestOptions)
                        .then(response => response.json()).catch(() => { msg.channel.send("This game is too hawd for me i'm having twouble figuwing stuff out >.<'") })
                        .then(result => {
                            xivCollection = result

                            var description = ""
                            var fields = []

                            var showLevels = msg.content.toLowerCase().search("level") != -1
                            var showProgress = msg.content.toLowerCase().search("progress") != -1 && !showLevels

                            if (showLevels) {
                                lodestoneCharacter.class_jobs.forEach(class_job => {
                                    if (combatEmotes[class_job.unlocked_state.name] !== undefined) {
                                        fields.push({
                                            name: `${combatEmotes[class_job.unlocked_state.name]} ${class_job.unlocked_state.name}`,
                                            value: `lvl: ${class_job.level == 0 ? "-" : class_job.level}`,
                                            inline: true
                                        })
                                    }
                                })

                                fields.push({
                                    name: lodestoneCharacter.class_jobs_elemental.name,
                                    value: lodestoneCharacter.class_jobs_elemental.level ? lodestoneCharacter.class_jobs_elemental.level : "-",
                                    inline: false
                                })

                                fields.push({
                                    name: lodestoneCharacter.class_jobs_bozjan.name,
                                    value: lodestoneCharacter.class_jobs_bozjan.level ? lodestoneCharacter.class_jobs_bozjan.level : "-",
                                    inline: false
                                })
                            }

                            if (showProgress) {
                                fields.push({
                                    name: "Achievements*",
                                    value: `${xivCollection.achievements.count}/${xivCollection.achievements.total} (${Math.round(xivCollection.achievements.count / xivCollection.achievements.total * 100)}%)`,
                                    inline: true
                                })
                                fields.push({
                                    name: "Mounts",
                                    value: `${xivCollection.mounts.count}/${xivCollection.mounts.total} (${Math.round(xivCollection.mounts.count / xivCollection.mounts.total * 100)}%)`,
                                    inline: true
                                })
                                fields.push({
                                    name: "Minions",
                                    value: `${xivCollection.minions.count}/${xivCollection.minions.total} (${Math.round(xivCollection.minions.count / xivCollection.minions.total * 100)}%)`,
                                    inline: true
                                })
                                fields.push({
                                    name: "Orchestrion Rolls**",
                                    value: `${xivCollection.orchestrions.count}/${xivCollection.orchestrions.total} (${Math.round(xivCollection.orchestrions.count / xivCollection.orchestrions.total * 100)}%)`,
                                    inline: true
                                })
                                fields.push({
                                    name: "Emotes**",
                                    value: `${xivCollection.emotes.count}/${xivCollection.emotes.total} (${Math.round(xivCollection.emotes.count / xivCollection.emotes.total * 100)}%)`,
                                    inline: true
                                })
                                fields.push({
                                    name: "Bardings**",
                                    value: `${xivCollection.bardings.count}/${xivCollection.bardings.total} (${Math.round(xivCollection.bardings.count / xivCollection.bardings.total * 100)}%)`,
                                    inline: true
                                })
                                fields.push({
                                    name: "Hairstyles**",
                                    value: `${xivCollection.hairstyles.count}/${xivCollection.hairstyles.total} (${Math.round(xivCollection.hairstyles.count / xivCollection.hairstyles.total * 100)}%)`,
                                    inline: true
                                })
                                fields.push({
                                    name: "Fashion Accessories**",
                                    value: `${xivCollection.fashions.count}/${xivCollection.fashions.total} (${Math.round(xivCollection.fashions.count / xivCollection.fashions.total * 100)}%)`,
                                    inline: true
                                })
                                if (xivCollection.triad) {
                                    fields.push({
                                        name: "Triple Triad Cards",
                                        value: `${xivCollection.triad.count}/${xivCollection.triad.total} (${Math.round(xivCollection.triad.count / xivCollection.triad.total * 100)}%)`,
                                        inline: true
                                    })
                                }
                            }

                            const embed = new Discord.MessageEmbed()
                                .setColor("c73954")
                                .setTitle(lodestoneCharacter.name)
                                .setURL(`https://na.finalfantasyxiv.com/lodestone/character/${characterId}/`)
                                .setDescription(description)
                                .addFields(fields)
                                .setImage(showLevels || showProgress ? null : lodestoneCharacter.portrait)
                                .setThumbnail(showLevels || showProgress ? lodestoneCharacter.avatar : null)
                                .setFooter(showProgress ? "\*You must have your achievements set to public on your lodestone profile\n\**Must be entered manually on the FFXIVCollect website." : "")

                            msg.channel.send(embed)
                        }).catch(() => { msg.channel.send("This game is too hawd for me i'm having twouble figuwing stuff out >.<'") })
                }).catch(() => { msg.channel.send("This game is too hawd for me i'm having twouble figuwing stuff out >.<'") })
        } catch (e) {
            msg.channel.send("This game is too hawd for me i'm having twouble figuwing stuff out >.<'")
        }
    }
}