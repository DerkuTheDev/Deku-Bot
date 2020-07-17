const Discord = require("discord.js");

module.exports = {
  name: "arole",
category: "Utility",
  run: async (bot, message, args) => {
    /*
    let logChannel = message.guild.channels.cache.find(
      channel => channel.name === "log"
    );
    if (!logChannel)
      return message.channel.send(
        "There is no channel called 'log', please create one and make sure the bot can send messages in it!"
      );

    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel.send(
        "You don't have the proper permissions to use this command."
      );

    let rMember = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args.join(' ')) ||  message.guild.members.cache.find(m => m.user.id === args.join(' '))
    if (!rMember)
      return message.channel.send(
        "Please provide a user to add the role to eg. c!arole @(user) [rank]"
      );
    let role =
      message.guild.roles.cache.find(r => r.name === args[1].join(' ')) ||
      message.guild.roles.cache.find(r => r.id === args[1]) ||
      message.mentions.roles.first();
    if (!role)
      return message.channel.send(
        "Please mention a role to add to the user eg. c!arole @(user) [rank]"
      );

    if (rMember.roles.cache.has(role.id)) {
      return message.channel.send(
        `${rMember.displayName} already has the role!`
      );
    } else {
      await rMember.roles.add(role.id).catch(e => console.log(e.message));
      message.channel.send(
        `The role ${role.name}, has been added to ${rMember.displayName}`
      );
    }
    let embed = new Discord.MessageEmbed()
      .setTitle(`Role added`)
      .setAuthor(`${message.guild.name} Role-Logs`)
      .setColor("#2f3136")
      .addField("Added role to:", rMember.user.username, true)
      .addField("Added by:", message.author.username, true)
      .addField("Role added:", role.name, true)

console.log(`Someone added a role to ${rMember}!`)

    logChannel.send(embed);
    */
    message.channel.send(":x: This command is down due to my creator being lazy and not fixing the commmand.. smh Derku#0714 just smh...")
  }
};
