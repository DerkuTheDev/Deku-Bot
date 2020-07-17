const Discord = require("discord.js")

module.exports = {
name: "coinflip",
aliases: ["cf", "coingame"],
category: "Games",
run: async (bot, message, args) => { 
  
  let sides = ["Heads", "Tails"];
  let randomSide = sides[Math.floor(Math.random() * sides.length)];
    
      let Embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.tag} flipped the coin!`)
      .setColor("#2f3136")
      .setDescription(`**You flipped ${randomSide}!**`)
    
    let LoadingEmbed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setDescription(`**Flipping the coin!**`)
    
    let msg = await message.channel
      message.channel.send(LoadingEmbed).then((msg)=>{
    setTimeout(function(){
    msg.edit(Embed)
    }, 1000)
})
    console.log(`${message.author.username}#${message.author.discriminator} flipped ${randomSide}!`)
  }
}
