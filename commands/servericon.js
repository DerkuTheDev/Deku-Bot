const Discord = require("discord.js");

module.exports = {
  name: "servericon",
  category: "Images",
  aliases: ["sa", "sicon", "serveri"],
  run: async(bot, message, args) => {
    let icon = message.guild.iconURL({ dynamic: true, size: 4096 });
    let iconLink = message.guild.iconURL({ dynamic: true, format: 'png', size: 512 });
    let serverName = message.guild.name;
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`Here is ${serverName}'s Icon!`) 
    .setColor("#2f3136")
    .setImage(icon)
    .addField("Icon Link", `[Click Me](${iconLink})`)
    message.channel.send(embed)
  }
}
