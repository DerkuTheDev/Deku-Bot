const Discord = require("discord.js")

module.exports = {
name: "magik",
category: "Images",
run: async (bot, message, args) => {
 
let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args.join(' ')) ||  message.guild.members.cache.find(m => m.user.id === args.join(' ')) || message.member;
let user = member.user;
 
let url = `https://api.alexflipnote.dev/filter/magik?image=${user.displayAvatarURL({ format: "png", size : 1024})}`
 
let embed = new Discord.MessageEmbed()
.setColor("#2f3136")
.setTitle(`Here is ${user.username}'s magik avatar!`)
.setImage(url)

message.channel.send(embed)
 
}
}
