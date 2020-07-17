const Discord = require("discord.js");
const randompuppy = require("random-puppy");

module.exports = {
  name: "anime",
  category: "Anime",
  run: async (bot, message, args) => {
    let loadingEmbed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setDescription(`<a:loading:717795161513656340> Generating a anime pic!...`)
    let msg = await message.channel
      .send(loadingEmbed)
      .then(m => m.delete({ timeout: 2000 }));

    let reddits = ["anime"];
    let randomreddit = reddits[Math.floor(Math.random() * reddits.length)];
    let redditimg = await randompuppy(randomreddit);

    let animeembed = new Discord.MessageEmbed()
      .setTitle("Heres Some ANIME! :3")
      .setImage(redditimg)
      .setColor("#2f3136")

console.log(`${message.author.username}#${message.author.discriminator} asked for a anime pic!`)

    return message.channel.send(animeembed);
  }
};
