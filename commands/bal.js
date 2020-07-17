const Discord = require("discord.js")

module.exports = {
    name: "balance",
    aliases: ["bal"],
    category: "Currency",
    cooldown: 5,
    run: async (bot, message, args) => {

    let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args.join(' ')) ||  message.guild.members.cache.find(m => m.user.id === args.join(' ')) || message.member;
    let user = member.user;

    let prevmoney = await bot.db.collection("Money").findOne({"User_ID": user.id})

    let name = member.nickname || user.username

    if (!prevmoney) {
        return message.channel.send(`Boi ${user.username} has no money! Do \`\`${bot.prefix}work\`\` to work and get money! And then you can run the command!`)
    }

    let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${name}s Balance!`)
        .setDescription(`**Balance**: \`\`${prevmoney.Money}\`\` \n **XP**: \`\`Coming Soon!\`\``)
        .setFooter("By the way this command is in beta!")
      

      message.channel.send(embed);

        
    }
}