const Discord = require("discord.js");
const moment = require("moment");
module.exports = {
  name: "serverinfo",
  category: "Utility",
  aliases: ["si"],

  run: async (bot, message, args) => {
    let createdAt = moment
      .utc(message.guild.createdAt)
      .format("dddd, MMMM Do, YYYY");
    let name = message.guild.name;
    let ID = message.guild.id;
    let boostTier = message.guild.premiumTier || "No Boost Tier";
    let boostCount = message.guild.premiumSubscriptionCount || "No Boosts";
    let memberCount = message.guild.memberCount;
    let roleCount = message.guild.roles.cache.size;
    let channelCount = message.guild.channels.cache.size;
    let icon = message.guild.iconURL({ dynamic: true });
    let banner = message.guild.bannerURL({ size: 1024 });
    let highestRole = message.guild.roles.highest;
    let textChannels = message.guild.channels.cache.filter(
      c => c.type === "text"
    ).size;
    let voiceChannels = message.guild.channels.cache.filter(
      c => c.type === "voice"
    ).size;
    let categorys = message.guild.channels.cache.filter(
      c => c.type === "category"
    ).size;
    let newsChannels = message.guild.channels.cache.filter(
      c => c.type === "news"
    ).size;
    let bots = message.guild.members.cache.filter(m => m.user.bot).size;
    let owner =  await message.guild.members.fetch(message.guild.ownerID) || "No Owner!";
    let roleNames = message.guild.roles.cache.map(r => r).join(", ");
    let emojisSize = message.guild.emojis.cache.size;

    let embed = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(icon)
      .setAuthor(`${message.guild.name}'s Info`, icon)
      .addFields(
        {
          name: "Server Info",
          value:`• Name: **${name}**\n• ID: **${ID}**\n• Owner: **${owner}**`,
        },
        {
          name: "Member Count",
          value: `• Total Members: **${memberCount}**\n• Bots: **${bots}**`,
        },
        {
         name: "Boosts",
          value: `• Total Boosts: **${boostCount}**\n• Boost Tier: **${boostTier}**`,
        },
        {
          name: "Channels",
          value: `• Total Channels: **${channelCount}**\n • Text Channels: **${textChannels}**\n • News Channels: **${newsChannels}**\n• Voice Channels: **${voiceChannels}**\n• Categorys: **${categorys}**`,
        },
        {
         name: "Emojis",
         value: `• Total Emojis: **${emojisSize}**`,
        },
        {
          name: "Roles",
          value: `• Total Roles: **${roleCount}**\n• Highest Role: **${highestRole}**`,
        }
      )
      .setImage(banner);
    message.channel.send(embed);
    console.log(`${message.author.username} checked ${name}'s info!`);
  }
};
