const Discord = require("discord.js");

module.exports = {
  name: "report",
  category: "Utility",
  run: async (bot, message, args) => {
    message.delete()
    let reportChannel = message.guild.channels.cache.find(
      channel => channel.name === "log"
    );
    if (!reportChannel)
      return message.channel.send(
        "There is no channel called 'log', please create one and make sure the bot can send messages in it!"
      );

    let rUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!rUser)
      return message.channel.send("I can't find that user, try again.");

    let args1 = message.content.slice(1).split(/ +/);
    let rReason = args1.slice(2).join(" ");

    if (!rReason) return message.channel.send("You need to specify a reason.");
    if (rReason > 32)
      return message.channel.send(
        "Sorry, the reason is to long. Keep it short, 32 characters."
      );

    let reportEmbed = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
      .addField(
        "Reporting User",
        `${message.author} with ID: ${message.author.id}`
      )
      .addField("Channel", message.channel)
      .addField("Reason", rReason);

    message.reply(`You successfully reported ${rUser}`);

    console.log(`Someone reported ${rUser}!`);
    let reportMessage = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setDescription(
        `You have been reported in **${message.guild.name}** for: **${rReason}**`
      );

    rUser.send(reportMessage);
    reportChannel.send(reportEmbed);
  }
};
