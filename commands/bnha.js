const Discord = require("discord.js");
const randompuppy = require("random-puppy");

module.exports = {
  name: "bnha",
  aliases: ["mha"],
  category: "Anime",
  run: async (bot, message, args) => {
    let loadingEmbed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setDescription(`<a:loading:717795161513656340> Generating a bnha/mha pic!...`)
    let msg = await message.channel
      .send(loadingEmbed)
      .then(m => m.delete({ timeout: 2000 }));

    let reddits = ["BokuNoHeroAcademia"];
    let randomreddit = reddits[Math.floor(Math.random() * reddits.length)];
    let redditimg = await randompuppy(randomreddit);

    let animeembed = new Discord.MessageEmbed()
      .setTitle("Heres Some BNHA/MHA! :3")
      .setImage(redditimg)
      .setColor("#2f3136")

console.log(`${message.author.username}#${message.author.discriminator} asked for a bnha/mha pic!`)

    return message.channel.send(animeembed);
  }
};
