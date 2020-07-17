const Discord = require("discord.js");
const config = require("../botconfig.json");

module.exports = {
  name: "setcustomstatus",
  aliases: ["customstatus"],
  category: "Developer Commands",
  cooldown: 1,
  run: async (bot, message, args) => {
  
  if (message.author.id !== config.ownerID)
        return message.channel.send(":x: You are not my owner!");
        
  if (args[0] === "servers") {
      bot.user.setActivity(`${bot.guilds.cache.size} servers!`, { type: "WATCHING"})
      await message.channel.send(`Changed my custom status to \`\`Watching ${bot.guilds.cache.size} servers!\`\``)
    } else if (args[0] === "info") {
      bot.user.setActivity(`d-info | d-help`, { type: "PLAYING"})
      await message.channel.send("Changed my custom status to ``Playing d-info | d-help``")
    } else  {
      return message.channel.send(`What do you want me to change my custom status to? Just do \`\`${bot.prefix}status <servers/info>\`\``)
    }
  }
};
