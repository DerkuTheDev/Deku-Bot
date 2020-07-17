const Discord = require("discord.js");

module.exports = {
  name: "shop",
  category: "Currency",
  cooldown: 5,
  run: async (bot, message, args) => {
    let prevmoney = await bot.db.collection("Money").findOne({"User_ID": message.author.id})
    prevmoney = 0;
    let items = await bot.db.collection("Inventory").findOne({"User_ID": message.author.id})

    let shopEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Here is the shop!");
    let shop = [
      ["🍪 Cookie", "Delicately baked for your sweet tooth! \n - Grandma", 5],
      ["🍰 Slice Of Cake", "Have a slice!", 10],
    ];
    for (const item of shop) {
      let itemName = item[0],
        itemDescription = item[1]
        itemPrice = item[2];
      shopEmbed.addFields({name: `${itemName}: \`\`${itemPrice}\`\``, value: `${itemDescription}`})
    }

    if (args[0] === "cookie") {
        await bot.db.collection("Money").findOneAndUpdate({ "User_ID": message.author.id }, {$set: {Money: prevmoney.Money - 5 }})
        return message.channel.send("You brought a cookie!")
    } else if (args[0] === "cake"){
        await bot.db.collection("Money").findOneAndUpdate({ "User_ID": message.author.id }, {$set: {Money: prevmoney.Money - 10 }})
        return message.channel.send("You brought a slice of cake!")
    } else {
        message.channel.send(shopEmbed)
    }
  }
};