const Discord = require("discord.js");

module.exports = {
  name: "gay",
  category: "Fun",
  cooldown: 10,
  aliases: ["gaycheck", "howgay", "gai"],
  run: async (bot, message, args) => {
    let random = Math.floor(Math.random() * Math.floor(100));
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) || message.author;
    
    
    let gaycheck = new Discord.MessageEmbed()
    .setTitle("🏳️‍🌈 Gay 'O' Meter 🏳️‍🌈 v1")
      .setDescription(`${user} is ${random}% gay! :gay_pride_flag:`)
      .setColor("#2f3136")
    .setFooter("Made with 🏳️‍🌈 PRIDE 🏳️‍🌈")
    if (user) return message.channel.send(gaycheck);
  }
};
