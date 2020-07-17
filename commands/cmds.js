const Discord = require("discord.js");
module.exports = {
  name: "commands",
  category: "Bot Information",
  aliases: ["cmds", "cmd", "Cmds", "Cmd", "Commands"],
  run: async (bot, message, args) => {
    
    let ping = Date.now() - message.createdTimestamp + " ms";

    const infoembed = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
      .setTitle(`${bot.user.username}'s Total Commands`)
      .addFields(
        {
          name: "Total commands:",
          value: `${bot.commands.size}`,
          inline: true
        },
        {
        name: "Need support?",
        value: "[Click here](https://discord.gg/fE5caj4)",
        inline: true
        }
      )
      .setFooter(`Do ${bot.prefix}help to get all the commands!`);
    message.channel.send(infoembed);
  }
};
