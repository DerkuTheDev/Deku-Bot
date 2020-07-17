const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "ihadastroke",
  aliases: ["stroke"],
  category: "Images",
  run: async (bot, message, args) => {
    
    let loadingEmbed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setDescription(`<a:loading:717795161513656340> Mkeaiming chave storke...`)
    let msg = await message.channel
      .send(loadingEmbed)
      .then(m => m.delete({ timeout: 2000 }));

    fetch("https://www.reddit.com/r/ihadastroke.json?sort=top&t=daily")
      .then(res => res.json())
      .then(body => {
        if (!body) return message.reply("I broke, try again!");

      const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
      if (!allowed.length) return message.channel.send('Hmm looks like an error to me...');
        const randomnumber = Math.floor(Math.random() * allowed.length)
       
    let url = `https://www.reddit.com${allowed[randomnumber].data.permalink}`
    console.log(url)
    let embed = new Discord.MessageEmbed()
      .setTitle(allowed[randomnumber].data.title)
      .setURL(url)
      .setDescription(`From r/${allowed[randomnumber].data.subreddit} | Posted by ${allowed[randomnumber].data.author}`)
      .setImage(allowed[randomnumber].data.url)
      .setFooter(`👍Likes: ${allowed[randomnumber].data.ups} | 💬Comments: ${allowed[randomnumber].data.num_comments}`)
      .setColor("#2f3136")

console.log(`${message.author.username}#${message.author.discriminator} chave storke`)

    return message.channel.send(embed);
    })
  }
};