const Discord = require("discord.js");

module.exports = {
  name: "mute",
  category: "Utility",
  run: async (bot, message, args) => {
    message.delete()
    let muteChannel = message.guild.channels.cache.find(
      channel => channel.name === "log"
    );
    if (!muteChannel)
      return message.channel.send(
        "There is no channel called 'log', please create one and make sure the bot can send messages in it!"
      );

    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel.send("You dont have permission to do that!");
    let mUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );
    if (!mUser)
      return message.channel.send("I can't find that user, try again.");
    if (mUser.hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "What are you doing, you cant mute that person!"
      );

    let mutee =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0])
    
    let reason = args.join(" ");
    if (!reason) return message.channel.send("Please specify a reason!!");
    let muterole = message.guild.roles.cache.find(r => r.name === "Muted");
    if(!muterole){
    try{
      muterole = await message.guild.roles.create({
        data: { 
        name: "Muted",
        color: "#000000",
        permissions: []
              },
      })
      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.updateOverwites(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
    console.log(muterole)
    mutee.roles.add(muterole).then(() => {
      message.delete();
      let muteMessage = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setDescription(
          `You have been muted in **${message.guild.name}** for: **${reason}**`
        );

      mUser.send(muteMessage);
      message.channel
        .send(
          `<@!${mutee.user.id}> was successfully muted!`
        )
        .then(m => m.delete({ timeout: 2500 }));
    });
    let muteEmbed = new Discord.MessageEmbed()
      .setDescription("~MUTE~")
      .setColor("#2f3136")
      .addField("Muted User", `${mUser} with ID ${mUser.id}`)
      .addField("Muted By", `${message.author} with Id ${message.author.id}`)
      .addField("Muted In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", reason);

    console.log(`Someone muted ${mUser}!`);

    muteChannel.send(muteEmbed);
  }
};
