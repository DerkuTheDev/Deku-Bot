const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "pat",
  run: async (bot, message, args) => {
    /*if (!message.mentions.users.first())
      return message.channel.send("Please mention a user to be patted!");

    fetch("https://nekos.life/api/pat")
      .then(res => res.json())
      .then(body => {
        if (!body) return message.channel.send("I've broke, try again!");

        let embed = new Discord.MessageEmbed()
        .setColor("#2f3136")
          .setAuthor(`${bot.user.username} Pat!`)
          .setTitle(
            `${message.author.username} patted ${
              message.mentions.users.first().username
            }. There! There!`
          )
          .setImage(body.url)
          .setFooter(
            bot.user.username.toUpperCase(),
            bot.user.displayAvatarURL()
          );

        console.log(
          `${message.author.username} patted someone ${
            message.mentions.users.first().username
          }!`
        );

        return message.channel.send(embed);
      });*/
  }
};
