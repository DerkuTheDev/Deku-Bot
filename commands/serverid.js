const Discord = require("discord.js");

module.exports = {
  name: "serverid",
  category: "Utility",
  
  run: async (bot, message, args) => {

    let Embed = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setTitle(`Server ID`)
      .setDescription(`Here is **${message.guild.name}'s** ID: **${message.guild.id}** :+1:`);
    
    message.reply(Embed)
  }
};
