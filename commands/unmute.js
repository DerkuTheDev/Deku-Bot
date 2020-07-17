const Discord = require("discord.js");

module.exports = {
  name: "unmute",
  category: "Utility",
  run: async (bot, message, args) => {
    let muteChannel = message.guild.channels.cache.find(
      channel => channel.name === "log"
    );
    if (!muteChannel)
      return message.channel.send(
        "There is no channel called 'log', please create one and make sure the bot can send messages in it!"
      );

    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("You dont have permission to do that!");
    let mUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );
    if (!mUser)
      return message.channel.send("I can't find that user, try again.");
    if (mUser.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "What are you doing, you cant unmute that person!"
      );

    let mutee =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    let muterole = message.guild.roles.cache.find(r => r.name === "Muted");
    if (!muterole) return message.channel.send("There is no role to remove");

    mutee.roles.remove(muterole.id).then(() => {
      message.delete();
      message.channel
        .send(`${mutee.user.username} was successfully unmuted!`)
        .then(m => m.delete({ timeout: 1000 }));
    });

    let embed = new Discord.MessageEmbed()
      .setDescription("~UNMUTE~")
     .setColor("#2f3136")
      .addField("Unuted User", `${mUser} with ID ${mUser.id}`)
      .addField("Unmuted By", `${message.author} with Id ${message.author.id}`)
      .addField("Unmuted In", message.channel)
      .addField("Time", message.createdAt);

    console.log(`Someone unmuted ${mUser}!`);

    muteChannel.send(embed);
  }
};
