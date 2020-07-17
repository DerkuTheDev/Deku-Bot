const Discord = require("discord.js");

module.exports = {
  name: "suggest",
  category: "Utility",
  run: async (bot, message, args) => {
    message.delete()
let requestChannel = bot.channels.cache.get("728510597410455552")
let requestUserKid = bot.users.cache.get("669206927879962626")

    let request = args.join(" ");
    if (!request) return message.channel.send(`Please specify what you want to request.\n**Example**: \`\`${bot.prefix}request Hay add some cool mario stuff\`\``);

    let embed = new Discord.MessageEmbed()
      .setAuthor(`Someone requested from ${message.guild.name}!`)
      .setColor("#2f3136")
      .addField("User requesting:", `${message.author.tag}`)
      .addField("Requested:", request)
      .setTimestamp()

    message.reply("You have sent your suggestion!")
    requestChannel.send(embed);
    requestUserKid.send(embed)
  }
};
