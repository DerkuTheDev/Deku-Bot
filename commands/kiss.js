const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "kiss",
  aliases: ["smooch"],
  run: async (bot, message, args) => {
   /* if (!message.mentions.users.first())
      return message.channel.send("Please mention a user to be kissed!");

    fetch("https://nekos.life/api/kiss")
      .then(res => res.json())
      .then(body => {
        if (!body)
          return message.channel.send("Whoops! I've broke, try again!");

        let embed = new Discord.MessageEmbed()
        .setColor("#2f3136")
          .setAuthor(`${bot.user.username} Kiss!`)
          .setTitle(
            `${message.author.username} kissed ${
              message.mentions.users.first().username
            }. Mwah!`
          )
          .setImage(body.url)
          .setFooter(
            bot.user.username.toUpperCase(),
            bot.user.displayAvatarURL()
          );

        return message.channel.send(embed);
      });*/
  }
};
