const Discord = require("discord.js")

module.exports = {
    name: "inventory",
    run: async (bot, message, args) => {
    let items = await bot.db.collection("Inventory").findOne({"User_ID": message.author.id})

        if (!items) {
            return message.channel.send("Bro you have no items ;-;")
        }

    message.channel.send(`Cookies: \`\`${items.Cookies}\`\``)
        
    }
}