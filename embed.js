const {MessageEmbed} = require('discord.js')
const {MessageReaction} = require('discord.js')
const Main = require('/Users/Philipp/HydropiBot/main.js')
const COLORS = {
    red: 0xe74c3c,
    green: 0x2ecc71
}

//exports.test = ""

module.exports = {

    test(channel, cont, title) {
        var message
        var emb = new MessageEmbed()
            .setColor(COLORS.red)
            .setDescription(cont)
            .setThumbnail('https://cdn.discordapp.com/attachments/565965990987300927/640630338007072768/Original_4.png')
            .setFooter('PokéMetropole', 'https://cdn.discordapp.com/attachments/565965990987300927/640630338007072768/Original_4.png')
            .setTimestamp(Date.now())
            .setTitle(title)
        channel.send('', emb)
    },
    poll(channel, msg) {
        var message
        var emb = new MessageEmbed()
            .setColor(COLORS.red)
            .setTitle(`${Frage}`)
            .setFooter('PokéMetropole', 'https://cdn.discordapp.com/attachments/565965990987300927/640630338007072768/Original_4.png')
            .setTimestamp(Date.now())
        if(AW2 == undefined && AW1 != undefined){
            emb.setDescription(`
                1️⃣ ${AW1}`)
        }
        if(AW3 == undefined && AW2 != undefined){
            emb.setDescription(`
                1️⃣ ${AW1}
                2️⃣ ${AW2}`)
        }
        if(AW4 == undefined && AW3 != undefined){
            emb.setDescription(`
                1️⃣ ${AW1}
                2️⃣ ${AW2}
                3️⃣ ${AW3}`)
        }
        if(AW5 == undefined && AW4 != undefined){
            emb.setDescription(`
                1️⃣ ${AW1}
                2️⃣ ${AW2}
                3️⃣ ${AW3}
                4️⃣ ${AW4}`)
        }
        if(AW5 != undefined){
            emb.setDescription(`
                1️⃣ ${AW1}
                2️⃣ ${AW2}
                3️⃣ ${AW3}
                4️⃣ ${AW4}
                5️⃣ ${AW5}`)
        }
        channel.send('', emb).then(MessageReaction => {
            if(AW2 == undefined && AW1 != undefined) {
                MessageReaction.react("1️⃣")
            }
            if(AW3 == undefined && AW2 != undefined) {
                MessageReaction.react("1️⃣")
                MessageReaction.react("2️⃣")
            }
            if(AW4 == undefined && AW3 != undefined) {
                MessageReaction.react("1️⃣")
                MessageReaction.react("2️⃣")
                MessageReaction.react("3️⃣")
            }
            if(AW5 == undefined && AW4 != undefined) {
                MessageReaction.react("1️⃣")
                MessageReaction.react("2️⃣")
                MessageReaction.react("3️⃣")
                MessageReaction.react("4️⃣")
            }
            if(AW5 != undefined) {
                MessageReaction.react("1️⃣")
                MessageReaction.react("2️⃣")
                MessageReaction.react("3️⃣")
                MessageReaction.react("4️⃣")
                MessageReaction.react("5️⃣")
            }
        message.delete(5000).catch(console.error);
        })
    }

}
