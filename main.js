const Discord   = require('discord.js')
const fs        = require('fs')
const Embeds    = require('/Users/Philipp/HydropiBot/embed.js')
const login     = require('/Users/Philipp/HydropiBot/config.json')
const { Client, RichEmbed } = require('discord.js')
const embed = require('/Users/Philipp/HydropiBot/embed.js')
const { poll } = require('/Users/Philipp/HydropiBot/embed.js')
const bot = new Client();
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

var client = new Discord.Client()

client.on('ready', () => {
    client.user.setPresence({
        status: 'online',
        activity: {
            name: 'Pokémon',
            type: "PLAYING",
            url: "http://pokemetropole.de"
        }
    })
    console.log(`Der ${client.user.username} ist bereit...`)
})

var cmdmap = {
    pw: cmd_pw,
    test: cmd_test,
    poll: cmd_poll
}

function cmd_pw(msg, args, arg1, arg2, arg3, arg4, arg5, arg6) {
    if(msg.member.id == config.cofiey){
        msg.channel.send('Bis Dedenne')
    }
    if(arg2 == undefined){
        msg.channel.send(`https://pokewiki.de/${arg1}`)
    } 
    if(arg2 != undefined && arg2 == 'TCG'){
        msg.channel.send(`https://pokewiki.de/${arg1}_(${arg2})`)
    }
    if(arg2 != undefined && arg2 != 'TCG'){
        msg.channel.send(`https://www.pokewiki.de/index.php?search=${arg1}+${arg2}&title=Spezial%3ASuche&go=Seite`)
    }
    if(arg3 != undefined){
        msg.channel.send(`https://www.pokewiki.de/index.php?search=${arg1}+${arg2}+${arg3}&title=Spezial%3ASuche&go=Seite`)
    }
    if(arg4 != undefined){
        msg.channel.send(`https://www.pokewiki.de/index.php?search=${arg1}+${arg2}+${arg3}+${arg4}&title=Spezial%3ASuche&go=Seite`)
    }
    if(arg5 != undefined){
        msg.channel.send(`https://www.pokewiki.de/index.php?search=${arg1}+${arg2}+${arg3}+${arg4}+${arg5}&title=Spezial%3ASuche&go=Seite`)
    }
    if(arg6 != undefined){
        msg.channel.send(`https://www.pokewiki.de/index.php?search=${arg1}+${arg2}+${arg3}+${arg4}+${arg5}+${arg6}&title=Spezial%3ASuche&go=Seite`)
    }
}

function cmd_test(msg, args) {
    Embeds.test(msg.channel, `Hydropi ist das beste Pokémon`, 'Test')
    console.log(Embeds.test)
}

function cmd_poll(msg, emb) {
    Embeds.poll(msg.channel, '', '')
    console.log(Embeds.poll)
}

client.on('message', (msg) => {

    var cont    = msg.content,
        author  = msg.member
        channel = msg.channel

    if (author.id != client.user.id && cont.startsWith(config.prefix)){

        
        var invoke  = cont.split(' ')[0].substr(config.prefix.length),
            args    = cont.split(' ').slice(1)
            arg1    = cont.split(' ')[1]
            arg2    = cont.split(' ')[2]
            arg3    = cont.split(' ')[3]
            arg4    = cont.split(' ')[4]
            arg5    = cont.split(' ')[5]
            arg6    = cont.split(' ')[6]
        
        console.log(invoke, args, arg1, arg2, arg3, arg4, arg5, arg6) 

        if (invoke in cmdmap) {
            cmdmap[invoke](msg, args, arg1, arg2, arg3, arg4, arg5, arg6)
        }
    }
    if(author.id != client.user.id && msg.content.includes('Hydropi') || msg.content.includes('hydropi')) {
        msg.react('780824116138606652')
            .catch(() => console.error('Ein Emote konnte nicht geposted werden'))
        console.log(`Hydropi wurde in ${msg.channel} erwähnt`)
    }

    if(author.id != client.user.id && cont.startsWith(`${config.prefix}poll`)){
        
        var invoke  = cont.split('+')[0].substr(config.prefix.length)
            Frage   = cont.split('+')[1]
            AW1     = cont.split('+')[2]
            AW2     = cont.split('+')[3]
            AW3     = cont.split('+')[4]
            AW4     = cont.split('+')[5]
            AW5     = cont.split('+')[6]
        console.log(invoke, Frage, AW1, AW2, AW3, AW4, AW5)

        if (invoke in cmdmap) {
            cmdmap[invoke](msg, Frage, AW1, AW2, AW3, AW4, AW5)
        }
    }
   // if(author.id != client.user.id && msg.content.includes('Glurak') || msg.content.includes('glurak') || msg.content.includes('charizard') || msg.content.includes('Charizard')) {
   //     msg.react('🤮')
   //         .catch(() => console.error('Ein Emote konnte nicht geposted werden'))
   //     console.log('Glurakkotze')
   // }
})

client.login(config.token)