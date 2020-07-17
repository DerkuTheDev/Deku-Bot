const Discord = require("discord.js");
module.exports = {
  name: "clear",
  category: "Utility",
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("You dont have permission to do that!");

    let amount = args[0];

    if (amount > 100)
      return message.channel.send("The max amount can be 100 or less!");
    if (amount <= 0)
      return message.channel.send("The amount needs to be above 0!");

    const embed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setTitle(`<a:loading:717795161513656340> Clearing ${amount} messages!`)
      .addField("Cleared in:", message.channel)
      .setTimestamp();

    message.channel.bulkDelete(amount);
console.log(`${message.author.username}#${message.author.discriminator} cleared ${amount} messages!`)
    message.channel.send(embed).then(m => m.delete({ timeout: 2500 }));
  }
};
