const Discord = require("discord.js")

module.exports = {
name: "changelogs",
aliases: ["changes", "updates"],
category: "Bot Information",
run: async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setColor("#2f3136")
.setDescription("Change Logs!")
.addFields(
{
name: "Change #2",
value: `Made a \`\`${bot.prefix}animeme\`\` command! \n Which gives you a anime meme!`
},
{
name: "Change #1",
value: `Made a \`\`${bot.prefix}bnha\`\` command! \n Which gives you a random bnha/mha pic!`
}
)
message.channel.send(embed)
}
}
