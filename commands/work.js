const Discord = require("discord.js")

module.exports = {
    name: "work",
    aliases: ["w"],
    category: "Currency",
    cooldown: 120,
    run: async (bot, message, args) => {
    let random = Math.floor(Math.random() * 100);
    let prevmoney = await bot.db.collection("Money").findOne({"User_ID": message.author.id})
    


      await bot.db.collection("Money").findOneAndUpdate({ "User_ID": message.author.id }, {$set: {Money: prevmoney ? prevmoney.Money + random : random}}, {upsert: true})
      prevmoney = 0;

    let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`You worked!`)
        .setDescription(`You worked and got \`\`${random}\`\` money! 💰`)
        .setFooter("By the way this command is in beta!")
      

      message.channel.send(embed);

        
    }
}