const Discord = require("discord.js");

module.exports = {
  name: "rrole",
  category: "Utility",
  run: async (bot, message, args) => {
   /* let logChannel = message.guild.channels.cache.find(
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
        "Please provide a user to remove the role from eg. c!rrole @(user) [rank]"
      );
    let role =
      message.guild.roles.cache.find(r => r.name === args[1].join(' ')) ||
      message.guild.roles.cache.find(r => r.id === args[1]) ||
      message.mentions.roles.first();
    if (!role)
      return message.channel.send(
        "Please mention a role to remove from the user eg. c!rrole @(user) [rank]"
      );

    if (!message.guild.me.hasPermission("MANAGE_ROLES"))
      message.channel.send(
        "What are you doing, you cant remove a role to that person!"
      );

    if (!rMember.roles.cache.has(role.id)) {
      return message.channel.send(
        `${rMember.displayName} doesn't have the role`
      );
    } else {
      await rMember.roles.remove(role.id).catch(e => console.log(e.message));
      message.channel.send(
        `The role ${role.name}, has been removed from ${rMember.displayName}`
      );
    }

    let embed = new Discord.MessageEmbed()
      .setTitle(`Role removed`)
      .setAuthor(`${message.guild.name} Role-Logs`)
      .setColor("#2f3136")
      .addField("Removed role from:", rMember.user.username, true)
      .addField("Removed by:", message.author.username, true)
      .addField("Role removed:", role.name, true)

console.log(`Someone removed a role from ${rMember}!`)

    logChannel.send(embed);
    */
    message.channel.send(":x: This command is down due to my creator being lazy and not fixing the commmand.. smh Derku#0714 just smh...")
  }
};
