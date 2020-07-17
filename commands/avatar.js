const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  category: "Images",
  aliases: ["av", "pfp"],
  run: async(bot, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args.join(' ')) ||  message.guild.members.cache.find(m => m.user.id === args[0]) || message.member;
    let user = member.user;
    
    let username = user.username;
    let uIcon = user.displayAvatarURL({dynamic: true, format: 'png', size: 4096});
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`Here is ${username}'s avatar!`) 
    .setColor("#2f3136")
    .setImage(uIcon)
    .addField("Avatar Link", `[Click Me](${user.displayAvatarURL({dynamic: true, format: 'png', size: 512})})`)
    message.channel.send(embed)
  }
}
