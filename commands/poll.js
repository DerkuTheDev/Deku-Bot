const Discord = require("discord.js");

module.exports = {
  name: "poll",
  category: "Utility",
  run: async (bot, message, args) => {
 message.delete()

    let notallowedEmbed = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setTitle(`${message.author.tag} No no!`)
      .setDescription(`You can't use this!`);
    
    if (!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id != "669206927879962626") return message.channel.send(notallowedEmbed);

    let pollArgs = args.join(" ");
    if(pollArgs.length === 0) {
   return message.channel.send("Provide me something to poll!")
    }
    
    console.log(
      `${message.author.tag} made a poll (${pollArgs})!`
    );

    let Embed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setTitle(`${message.author.tag} made a poll!`)
    .setDescription(pollArgs);

    message.channel.send(Embed).then(sentMessage => {
sentMessage.react("👍")
sentMessage.react("👎")
sentMessage.react("🤷")
})
  }
};
