const Discord = require("discord.js");
const config = require("../botconfig.json");
let moment = require("moment")

module.exports = {
  name: "eval",
  category: "Developer Commands",
  run: async (bot, message) => {
    function clean(text) {
      if (typeof text === "string")
        return text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    }

    const args = message.content.split(" ").slice(1);

    {
      if (message.author.id !== config.ownerID)
        return message.channel.send(":x: You are not my owner!");
      try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);

        let evalEmbed = new Discord.MessageEmbed()
        .setColor("#2f3136")
          // .setDescription(`\`\`\`xl\n${clean(evaled)}\`\`\``)
          .addFields(
            {
              name: "📥INPUT📥",
              value: `\`\`\`js\n${code}\`\`\``,
              inline: false
            },
            {
              name: "📤OUTPUT📤",
              value: `\`\`\`xl\n${clean(evaled)}\n\`\`\``,
              inline: false
            }
          );
        message.channel.send(evalEmbed);
      } catch (err) {
        let errEmbed = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .addFields({
          name: "ERROR",
          value: `\`\`\`xl\n${clean(err)}\n\`\`\``,
          inline: false
        });

        message.channel.send(errEmbed);
      }
    }
  }
};
//clean(evaled), { code: "xl" }
