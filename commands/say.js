const Discord = require("discord.js")

module.exports = {
  name: "say",
  category: "Utility",
  cooldown: 1,
  run: async (bot, message, args) => {
        message.delete()

     let notallowedEmbed = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setTitle(`${message.author.username} No no!`)
      .setDescription(`You can't use this!`);
    
      if (!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id != "669206927879962626") return message.channel.send(notallowedEmbed);

    let argsresult;

      argsresult = args.join(" ");

      console.log(`${message.author.username} said ${argsresult}!`);

      message.channel.send(argsresult);
    }
  };
