const Discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "Bot Information",
  run: async (bot, message, args) => {
    let inviteembed = new Discord.MessageEmbed()
      .setTitle("Invite me!")
      .setColor("#2f3136")
      .setURL(
        "https://discord.com/oauth2/authorize?client_id=701741237966995456&permissions=305507414&scope=bot"
      )
      .setDescription(`The bot is on ${bot.guilds.cache.size} servers!\n[Why Not Invite Neon!](https://discord.com/oauth2/authorize?client_id=706014173284401162&scope=bot&permissions=268790910)`)
    console.log(
      `${message.author.username}#${message.author.discriminator} may have invited me!`
    );

    return message.channel.send(inviteembed);
  }
};
