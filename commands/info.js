const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "info",
  category: "Bot Information",
  aliases: "information",
  run: async (bot, message, args) => {

    let ping = `${bot.ws.ping}ms`
    
    let members = bot.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b).toLocaleString()
    
    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `${days}D:${hours}H:${minutes}M:${seconds}S`;

    const infoembed = new Discord.MessageEmbed()
     .setColor("#2f3136")
      .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
      .setTitle(`${bot.user.username}'s Info`)
      .addFields(
        {
          name: "Total servers:",
          value: `${bot.guilds.cache.size}`,
        },
        {
          name: "Total users:",
          value: `${members}`,
        },
        {
          name: "Ping:",
          value: `${ping}`,
        },
        {
         name: "Uptime:",
         value: `\`\`${uptime}\`\``,
        },
        {
          name: "Default Prefix:",
          value: `\`\`d-\`\``,
        },
        {
         name: "Server Prefix:",
         value: `\`\`${bot.prefix}\`\``, 
        },
        {
          name: "Made By:",
          value: "Derku#0714",
        },
        {
          name: "Links:",
          value: "[Invite Me!](https://discord.com/oauth2/authorize?client_id=701741237966995456&permissions=305507414&scope=bot) **|** [Why Not Invite Neon!](https://discord.com/oauth2/authorize?client_id=706014173284401162&scope=bot&permissions=268790910) **|** [Need Support?](https://discord.gg/fE5caj4)",
        }
      )

      .setImage("https://top.gg/api/widget/701741237966995456.png?v=" + (Date.now() >> 0).toString(36))
    message.channel.send(infoembed);
    console.log(`Ping: ${Date.now() - message.createdTimestamp}ms`);
  }
};
