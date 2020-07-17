const Discord = require("discord.js");

module.exports = {
  name: "phtext",
  category: "Images",
  run: async (bot, message, args) => {
    if (!args[0]) {
      return message.channel.send("No arguments");
    }
    if (
      !args
        .join(" ")
        .split("")
        .join(" ")
        .split(" ")
        .includes(",")
    ) {
      return message.channel.send("There are no (,)");
      if (!args.join(" ").split(",")[1]) {
        return message.channel.send("No second argument");
      }
    }
    let SecArg;
    if (
      args
        .join(" ")
        .split(",")[1]
        .startsWith(" ")
    ) {
      SecArg = args
        .join(" ")
        .split(",")[1]
        .slice(1);
    } else {
      SecArg = args.join(" ").split(",")[1];
    }
    let FirstArg = args.join(" ").split(",")[0];
    let PHAttachment = new Discord.MessageAttachment(
      `https://api.alexflipnote.dev/pornhub?text=${FirstArg.split(" ").join(
        "%20"
      )}&text2=${SecArg.split(" ").join("%20")}`,
      "PHText.png"
    );
    let phEmbed = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setImage(
        `https://api.alexflipnote.dev/pornhub?text=${FirstArg.split(" ").join("%20")}&text2=${SecArg.split(" ").join("%20")}`, "PHText.png");
    return message.channel.send(phEmbed);
  }
};
