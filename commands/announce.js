const Discord = require("discord.js");

module.exports = {
  name: "announce",
  category: "Utility",
  run: async (bot, message, args) => {
    message.delete()

    let notallowedEmbed = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setTitle(`${message.author.username} No no!`)
      .setDescription(`You can't use this!`);
    
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(notallowedEmbed);
    
    let argsresult;
    
      argsresult = args.join(" ");

      console.log(`${message.author.username} announced ${argsresult}!`);

      let Embed = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setDescription(argsresult);
      message.channel.send(message.guild.roles.everyone.toString()).then(msg => msg.delete());
      message.channel.send(Embed);
}
  };
