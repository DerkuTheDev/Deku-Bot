const Discord = require("discord.js");

module.exports = {
  name: "userid",
  category: "Utility",
  
  run: async (bot, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args.join(' ')) ||  message.guild.members.cache.find(m => m.user.id === args.join(' ')) || message.member;
  let user = member.user;
    
    let ID = user.id;
    let Name = user.username;
    
    let Embed = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setTitle(`${Name}'s User ID`)
      .setDescription(`Here is ${Name}'s user ID: **${ID}** :+1:`);
    
        message.reply(Embed)
}
};
