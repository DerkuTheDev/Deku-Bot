const Discord = require("discord.js")

module.exports = {
    name: "test",
    run: async (bot, message, args) => {
    let items = await bot.db.collection("Inventory").findOne({"User_ID": message.author.id})


    await bot.db.collection("Inventory").findOneAndUpdate({ "User_ID": message.author.id }, {$set: {Cookies: items ? items.Cookies + 5 : 5 }}, {upsert: true})
    items = 0;




        
    }
}