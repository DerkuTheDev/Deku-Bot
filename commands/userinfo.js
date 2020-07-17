const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "userinfo",
  category: "Utility",
  aliases: ["ui"],
  run: async (bot, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args.join(' ')) ||  message.guild.members.cache.find(m => m.user.id === args.join(' ')) || message.member;
    let user = member.user;
    
    let rolesHighest = member.roles.highest;
    let rolesNum = member.roles.cache.size - 1;
    let roleNames = member.roles.cache.filter(r => r.id !== message.guild.id).map(r => r).join(" **|** ");
    let userName = user.username;
    let userDescrim = user.discriminator;
    let userNick = member.nickname || "No Nickname";
    let userID = user.id;
    let userStatus = user.presence.status.charAt(0).toUpperCase() + user.presence.status.slice(1);
    let uIcon = user.displayAvatarURL({ dynamic: true, size : 512})
    let boostingSince = member.premiumSince ? moment.utc(member.premiumSince).format("YYYY, MMM Do, h:mm:ss") : "Not boosting";
    
    let userJoined = moment
      .utc(message.guild.members.cache.get(member.id).joinedAt)
      .format("YYYY, MMM Do, h:mm:ss");


    const embed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(`${userName}'s Information!`, uIcon)
    .setThumbnail(uIcon)
    .addFields(
      {
        name: "Info",
        value: `• Username: **${userName}#${userDescrim}**\n• Nickname: **${userNick}**\n• ID: **${userID}**\n• Date Joined Server: **${userJoined}**\n• Boosting : **${boostingSince}**`,
      },
      {
        name: "Status",
        value: `• Status: **${userStatus}**`,
      },
      {
      name: "Roles",
      value: `• Highest Role: **${rolesHighest}**\n• Roles: **${rolesNum}**\n${roleNames}`,
      },
    )

    message.channel.send(embed);
  }
};
