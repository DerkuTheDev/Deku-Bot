const Discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "Utility",
  run: async (bot, message, args) => {
    message.delete()
    let banChannel = message.guild.channels.cache.find(
      channel => channel.name === "log"
    );
    if (!banChannel)
      return message.channel.send(
        "There is no channel called 'log', please create one and make sure the bot can send messages in it!"
      );

    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("You dont have permission to do that!");
    let bUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );
    if (!bUser)
      return message.channel.send("I can't find that user, try again.");
    if (bUser.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "What are you doing, you cant ban that person!"
      );

    let args1 = message.content.slice(1).split(/ +/);
    let bReason = args1.slice(2).join(" ");

    if (!bReason) return message.channel.send("You need to specify a reason.");
    if (bReason > 32)
      return message.channel.send(
        "Sorry, the reason is to long. Keep it short, 32 characters."
      );

    let banEmbed = new Discord.MessageEmbed()
      .setTitle(`${message.guild.name} Ban-Logs`)
      .setColor("#2f3136")
      .addField("Banned User:", `${bUser} with ID ${bUser.id}`)
      .addField("Banned By:", `${message.author} with Id ${message.author.id}`)
      .addField("Banned In:", message.channel)
      .addField("Reason:", bReason);

    message.channel.send(`**${bUser}** was banned for: **${bReason}**`);

        console.log(`${message.author.tag} banned ${bUser.tag} for: ${bReason}!`);
    
    message.guild.member(bUser).ban(bReason);

        let banMessage = new Discord.MessageEmbed()
          .setColor("#2f3136")
    .setDescription(`You have been banned in **${message.guild.name}** for: **${bReason}**`)
    
bUser.send(banMessage);
    
    banChannel.send(banEmbed);
  }
};
