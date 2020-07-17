const Discord = require("discord.js");

module.exports = {
  name: "vote",
  category: "Bot Information",
  aliases: ["rate", "upvote"],
  run: async (bot, message, args) => {
    let voteEmbed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/avatars/701741237966995456/9f3bbf6be522c76191608334234be96f.png?size=128")
      .setColor("#2f3136")
      .setTitle(`Hay! ${message.author.username} want to vote me?`)
      .addFields(
        {
        name: "Did you know?",
        value: `\`\`If you vote you may get some special perks!\`\``,
        },
        {
        name: "Vote Link",
        value: "[Click Here](https://top.gg/bot/701741237966995456/vote)"
        }
      );
    message.channel.send(voteEmbed);
  }
};
