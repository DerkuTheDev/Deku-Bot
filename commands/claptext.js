const Discord = require("discord.js")

module.exports = {
  name: "claptext",
  aliases: ["ct"],
  category: "Fun",
  cooldown: 1,
  run: async (bot, message, args) => {
        message.delete()


    let argsresult;

      argsresult = args.join(" 👏 ");

    if (args.length < 2) {
        return message.reply("Too short please write something above 1 word!")
    }

      message.channel.send(argsresult);
    }
  };