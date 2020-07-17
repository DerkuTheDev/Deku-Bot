const Discord = require("discord.js")
const config = require("../botconfig.json");

module.exports = {
    name: "give",
    aliases: ["g"],
    category: "Currency",
    cooldown: 1,
    run: async (bot, message, args) => {

    if (message.author.id !== config.ownerID)
    return message.channel.send(":x: You are not my owner!");
    
    let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args.join(' ')) ||  message.guild.members.cache.find(m => m.user.id === args.join(' ')) || message.member;
    let user = member.user;

    let prevmoney = await bot.db.collection("Money").findOne({"User_ID": user.id})

    let name = member.nickname || user.username
    

    let money = 1000;

      await bot.db.collection("Money").findOneAndUpdate({ "User_ID": user.id }, {$set: {Money: prevmoney ? prevmoney.Money + money : money}}, {upsert: true})
      prevmoney = 0;

    let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`You gave money to ${name}!`)
        .setDescription(`You gave \`\`${money}\`\` to ${name}!`)
        .setFooter("By the way this command is in beta!")
      

      message.channel.send(embed);

        
    }
}