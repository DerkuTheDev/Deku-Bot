const Discord = require("discord.js");
const config = require("../botconfig.json");

module.exports = {
  name: "setstatus",
  aliases: ["status"],
  category: "Developer Commands",
  cooldown: 1,
  run: async (bot, message, args) => {
  
  if (message.author.id !== config.ownerID)
        return message.channel.send(":x: You are not my owner!");
        
  if (args[0] === "online") {
      bot.user.setPresence({status: "online"})
      await message.channel.send("Changed my status to ``Online``!")
    } else if (args[0] === "dnd") {
      bot.user.setPresence({status: "dnd"})
      await message.channel.send("Changed my status to ``Do Not Disturb``!")
    } else if (args[0] === "idle") {
      bot.user.setPresence({status: "idle"})
      await message.channel.send("Changed my status to ``Idle``!")
    } else  {
      return message.channel.send(`What do you want me to change my status to? Just do \`\`${bot.prefix}status <online/dnd/idle>\`\``)
    }
  }
};
