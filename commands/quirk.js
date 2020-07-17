const Discord = require("discord.js");
module.exports = {
  name: "quirk",
  category: "Anime",
  cooldown: 10,
  run: async (bot, message, args) => {
   let quirks = require("../quirks.js")
   
  let randomQuirk = quirks[Math.floor(Math.random() * quirks.length)];

    let Embed = new Discord.MessageEmbed()
      .setAuthor(`Quirk Generator`)
      .setColor("#2f3136")
      .setDescription(`**You got ${randomQuirk}!**`)
      .setFooter(
        `Requested by ${message.author.username}#${message.author.discriminator}!`
      );
    
    let LoadingEmbed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setDescription(`<a:loading:717795161513656340> **Generating a quirk!...**`)
    
    let msg = await message.channel
      message.channel.send(LoadingEmbed).then((msg)=>{
    setTimeout(function(){
    msg.edit(Embed)
    }, 1000)
})
    console.log(`${message.author.username}#${message.author.discriminator} got ${randomQuirk}!`)
  }
};
