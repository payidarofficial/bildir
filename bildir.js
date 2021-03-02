// KOMUTLAR KISMINA ATILACAK KISIM
const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        // Şikayet
        if(args[0] === "şikayet"){
            // Let
            let sikayetm = args.slice(1).join(' ');
            let channel = message.guild.channels.cache.filter((channel) => channel.type === "text").first();

            channel.createInvite().then(pâyidarinvite => {
                if(!sikayetm){
                    const pâyidar = new Discord.MessageEmbed()
                    .setDescription(`**Lütfen Şikayet Metni Giriniz.**`)
                    .setColor('#ff0000')
                    return message.channel.send(pâyidar)
                } else {
                    const pâyidar = new Discord.MessageEmbed()
                    .setDescription(`**Başarıyla Şikayetinizi Kurucumuza Bildirdim.**`)
                    .setColor('BLACK')
                    message.channel.send(pâyidar)
        
                    client.channels.cache.get('ŞİKAYET LOG İD').send(new Discord.MessageEmbed().setDescription(`${message.author} İsimli Kişinin Şikayeti **${sikayetm}** \n Sunucu Davet Linki ${pâyidarinvite.url}`).setColor('BLACK').setFooter('Coded By Pâyidar'))
                }
            })
        }

        // Öneri
        if(args[0] === "öneri"){
            // Let
            let onerim = args.slice(1).join(' ');
            let channel = message.guild.channels.cache.filter((channel) => channel.type === "text").first();

            channel.createInvite().then(pâyidarinvite => {
                if(!onerim){
                    const pâyidar = new Discord.MessageEmbed()
                    .setDescription(`**Lütfen Öneri Metni Giriniz.**`)
                    .setColor('#ff0000')
                    return message.channel.send(pâyidar)
                } else {
                    const pâyidar = new Discord.MessageEmbed()
                    .setDescription(`**Başarıyla Önerinizi Bildirdim.**`)
                    .setColor('BLACK')
                    message.channel.send(pâyidar)
        
                    client.channels.cache.get('ÖNERİ LOG İD').send(new Discord.MessageEmbed().setDescription(`${message.author} İsimli Kişinin Şikayeti **${onerim}** \n Sunucu Davet Linki ${pâyidarinvite.url}`).setColor('BLACK').setFooter('Coded By Pâyidar'))
                }
            })
        }

        // Bug Bildiri
        if(args[0] === "bug"){
            // Let
            let bugm = args.slice(1).join(' ');
            let channel = message.guild.channels.cache.filter((channel) => channel.type === "text").first();

            channel.createInvite().then(pâyidarinvite => {
                if(!bugm){
                    const pâyidar = new Discord.MessageEmbed()
                    .setDescription(`**Lütfen Öneri Metni Giriniz.**`)
                    .setColor('#ff0000')
                    return message.channel.send(pâyidar)
                } else {
                    const pâyidar = new Discord.MessageEmbed()
                    .setDescription(`**Başarıyla Önerinizi Bildirdim.**`)
                    .setColor('BLACK')
                    message.channel.send(pâyidar)
        
                    client.channels.cache.get('ÖNERİ LOG İD').send(new Discord.MessageEmbed().setDescription(`${message.author} İsimli Kişinin Şikayeti **${bugm}** \n Sunucu Davet Linki ${pâyidarinvite.url}`).setColor('BLACK').setFooter('Coded By Pâyidar'))
                }
            })
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Bildir','BİLDİR'],
    permLevel: 0
}

exports.help = {
    name: 'bildir'
}
