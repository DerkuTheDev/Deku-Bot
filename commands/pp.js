const Discord = require("discord.js");

module.exports = {
  name: "pp",
  category: "Fun",
  aliases: ["penis", "dick", "cock"],
  cooldown: 10,
  run: async (bot, message, args) => {
    let random = Math.floor(Math.random() * Math.floor(100));
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) || message.author;
    
    let normalUser = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setTitle("🍆 PP 'O' Meter 🍆 v1")
    .setDescription(
      `${user} has a **${random} inch** PP! :eggplant:`
    )
    .setFooter(`Made with Fun ;)`)

      if (user) return message.channel.send(normalUser);
    }
  };
