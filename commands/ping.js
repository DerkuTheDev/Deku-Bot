const Discord = require('discord.js')

module.exports = { 
  name: "ping",
  category: "Bot Information",
  cooldown: 1,
  run: async(bot, message, args) => {
    let ping = `${bot.ws.ping}ms`
    
    let Embed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setTitle("🏓 Pong!")
    .setDescription(`Ping is ${ping}`)

  message.channel.send(Embed)
}
}
