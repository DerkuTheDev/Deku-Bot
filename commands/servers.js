const Discord = require("discord.js");

module.exports = {
  name: "servers",
  category: "Bot Information",
  run: async (bot, message, args) => {
    let serversembed = new Discord.MessageEmbed()
      .setTitle("How many servers am i in?")
      .setColor("#2f3136")
      .setDescription(`I am in ${bot.guilds.cache.size} servers!`)
      .addFields(
           {
            name: "Wanna join these servers?",
            value: `[Support Server](https://discord.gg/zS4Qcks) \n [Backup Server](https://discord.gg/cfmk9PY)`,
            inline: true
           }
                )
    .setImage("https://top.gg/api/widget/701741237966995456.png?v=" + (Date.now() >> 0).toString(36))
    console.log(
      `${message.author.username}#${message.author.discriminator} wanted to see how many servers im in!`
    );

    message.channel.send(serversembed);
  }
};
