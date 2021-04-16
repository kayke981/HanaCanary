const Discord = require('discord.js');
const {color} = require('../../config.json');

exports.run = async (client, message, args) => {
    
    const embed = new Discord.MessageEmbed()
    .setDescription(`↗️ **|** **a música foi pulada** [ ${message.author} ]`)
    .setColor(color)
    
    if(!client.player.isPlaying(message)) return message.inlineReply(`Não estou tocando nada`)
    if (message.guild.me.voice.channel && message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send("Você não está no mesmo canal de voz que eu");
     
client.player.skip(message)
    
    message.inlineReply(message.author, embed)
  
}
exports.config = {
    name: "skip",
    aliases: ['pular']
}