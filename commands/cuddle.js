const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "cuddle",
  run: async (bot, message, args) => {
    /*  if (!message.mentions.users.first())
      return message.channel.send("Please mention a user to cuddle!");

    fetch("https://nekos.life/api/v2/img/cuddle")
      .then(res => res.json())
      .then(body => {
        if (!body)
          return message.channel.send("Whoops! I've broke, try again!");

        let embed = new Discord.MessageEmbed()
        .setColor("#2f3136")
          .setAuthor(`${bot.user.username} Cuddle!`)
          .setTitle(
            `${message.author.username} cuddled ${
              message.mentions.users.first().username
            }. Awwww!`
          )
          .setImage(body.url)
          .setFooter(
            bot.user.username.toUpperCase(),
            bot.user.displayAvatarURL()
          );

console.log(`${message.author.username} cuddled ${message.mentions.users.first().username}`)

        return message.channel.send(embed);
      });*/
  }
};
