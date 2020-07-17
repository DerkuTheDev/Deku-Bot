const Discord = require("discord.js");

module.exports = {
  name: "warn",
  category: "Utility",
  run: async (bot, message, args) => {
    message.delete()
    let logChannel = message.guild.channels.cache.find(
      channel => channel.name === "log"
    );
    if (!logChannel)
      return message.channel.send(
        "There is no channel called 'log', please create one and make sure the bot can send messages in it!"
      );
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "You don't have the permissions to use this command!"
      );
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "I don't have the permissions to run this command!"
      );

    let reason = args.slice(1).join(" ");
    if (!reason) return message.channel.send("Please specify a reason!");

    let warnMember = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args.join(' ')) ||  message.guild.members.cache.find(m => m.user.id === args.join(' '))
    let warnUser = warnMember.user;
    if (!warnMember)
      return message.channel.send("Please specify the user you want to warn!");

    let embed = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name} Warning-Logs`)
      .setColor("#2f3136")
      .addField("User warned:", `${warnUser} with ID: ${warnUser.id}`)
      .addField("Warned by:", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel:", `${message.channel}`)
      .addField("Reason:", reason)
    message.channel.send(`**${warnMember}** was warned for: **${reason}**`);

    console.log(`${message.author.tag} warned ${warnUser.tag} for: ${reason}!`);
    
    let warnMessage = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setDescription(
        `You have been warned in **${message.guild.name}** for: **${reason}**`
      );

    warnMember.send(warnMessage);
    logChannel.send(embed);
  }
};
