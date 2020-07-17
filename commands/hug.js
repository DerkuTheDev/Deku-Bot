const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "hug",
  run: async (bot, message, args) => {
   /* if (!message.mentions.users.first())
      return message.channel.send("Please mention a user to be hugged!");

    fetch("https://nekos.life/api/hug")
      .then(res => res.json())
      .then(body => {
        if (!body)
          return message.channel.send("Whoops! I've broke, try again!");

        let embed = new Discord.MessageEmbed()
        .setColor("#2f3136")
          .setAuthor(`${bot.user.username} Hug!`)
          .setTitle(
            `${message.author.username} hugged ${
              message.mentions.users.first().username
            }. Awwww!`
          )
          .setImage(body.url)
          .setFooter(
            bot.user.username.toUpperCase(),
            bot.user.displayAvatarURL()
          );

console.log(`${message.author.username} hugged someone!`)

        return message.channel.send(embed);
      });*/
  }
};
