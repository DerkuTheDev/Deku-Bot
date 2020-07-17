const Discord = require("discord.js");
const config = require("../botconfig.json")

module.exports = {
name: "setprefix",
category: "Config",
run: async (bot, message, args) => {
    
if(args.length === 0){
   return message.channel.send("Provide a prefix!")
}
//message.author.id != config.ownerID &&
if(message.author.id != "669206927879962626" && !message.member.hasPermission("ADMINISTRATOR"))return message.channel.send("You can only modify my prefix if you have the `ADMINISTRATOR` permission")
if(message.author.id != config.ownerID && args.length > 3)return message.channel.send("You can only set prefixes longer than 3 if you are my owner, you aren't")
if(args[0] === "d-")return await bot.db.collection('Prefixes').deleteOne({"g_id":message.guild.id}).then(message.channel.send("Prefix has been set to default"))
    const prefixEmbed = new Discord.MessageEmbed()
       .setColor("#2f3136")
        .setTitle("Prefix Changed!")
        .setDescription(
          `Prefix for this guild has been changed to \`\`${
            args[0]
          }\`\` succssfully :tada:`
        )
        await bot.db.collection("Prefixes").updateOne({"g_id":message.guild.id}, {$set:{prefix:args[0]}},  {upsert:true})
     return message.channel.send(prefixEmbed); //sends the embed
      }
};
 // message.channel.send(":x: This command isnt working properly! Please try later!")
