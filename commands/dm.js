const Discord = require("discord.js");

module.exports = {
  name: "dm",
  category: "Developer Commands",
  run: async (bot, message, args) => {
    message.delete();
    var ids = ["669206927879962626", "696421415183843398"];

    if (!ids.includes(message.author.id))
      return message.channel.send("You can't use this");

    let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args.join(' ')) ||  message.guild.members.cache.find(m => m.user.id === args.join(' ')) || message.member;
    let user = member.user;
    
    let dm = args.slice(1).join(" ");

    let Embed = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setTitle(`You've been sent a DM!`)
      .setDescription(dm);
    
    let Embed2 = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setTitle(`You sent ${user.user.username} this!`)
      .setDescription(dm);

    if (!user)
      return message.channel.send(
        "Please specify a user to send the message to!"
      );
    if (!dm)
      return message.channel.send("Please specify your message to the user!");
    message.delete();

    console.log(`${message.author.username} dm'ed someone!`);
    
    message.author.send(Embed2);
    user.send(Embed).catch(err => console.log(err));
  }
};

