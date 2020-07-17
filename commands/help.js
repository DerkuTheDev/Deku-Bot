const Discord = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["?", "Help", "HELP"],
  cooldown: 1,
  run: async (bot, message, args) => {

    let { botInfoSize, animalsSize, imagesSize, animeSize, funSize, currencySize, gameSize, utilitySize, developerSize } = newFunction_1(bot);
    let { botInfoCategory, animalsCategory, imagesCategory, animeCategory, funCategory, currencyCategory, gameCategory, utilityCategory, developerCategory } = newFunction(bot);
    let helpMenuEmbed = new Discord.MessageEmbed()
      .setAuthor(`${bot.user.username}s Commands`, bot.user.displayAvatarURL())
      .setColor("RANDOM")
      .addFields(
        {
        name: `Bot Info [${botInfoSize}]`,
        value: `${botInfoCategory}`,
        },
        {
        name: `Animals [${animalsSize}]`,
        value: `${animalsCategory}`,
        },
        {
        name: `Images [${imagesSize}]`,
        value: `${imagesCategory}`,
        },
        {
        name: `Anime [${animeSize}]`,
        value: `${animeCategory}`,
        },
        {
        name: `Fun [${funSize}]`,
        value: `${funCategory}`,
        },
        {
        name: `Currency [${currencySize}]`,
        value: `${currencyCategory}`,
        },
        {
        name: `Games [${gameSize}]`,
        value: `${gameCategory}`,
        },
        {
        name: `Utility [${utilitySize}]`,
        value: `${utilityCategory}`,
        },
        {
        name: `Developer [${developerSize}]`,
        value: `${developerCategory}`,
        }
      )

      message.channel.send(helpMenuEmbed);

    console.log(
      `${message.author.username}#${message.author.discriminator} asked for help!`
    );
  }
};
function newFunction_1(bot) {
  let botInfoSize = bot.commands.filter(c => c.category === "Bot Information").size;
  let animalsSize = bot.commands.filter(c => c.category === "Animals").size;
  let imagesSize = bot.commands.filter(c => c.category === "Images").size;
  let animeSize = bot.commands.filter(c => c.category === "Anime").size;
  let funSize = bot.commands.filter(c => c.category === "Fun").size;
  let currencySize = bot.commands.filter(c => c.category === "Currency").size;
  let gameSize = bot.commands.filter(c => c.category === "Games").size;
  let utilitySize = bot.commands.filter(c => c.category === "Utility").size;
  let developerSize = bot.commands.filter(c => c.category === "Developer Commands").size;
  return { botInfoSize, animalsSize, imagesSize, animeSize, funSize, currencySize, gameSize, utilitySize, developerSize };
}

function newFunction(bot) {
  let botInfoCategory = bot.commands.filter(c => c.category === "Bot Information").map(m => `\`${m.name}\``).join(" ");
  let animalsCategory = bot.commands.filter(c => c.category === "Animals").map(m => `\`${m.name}\``).join(" ");
  let imagesCategory = bot.commands.filter(c => c.category === "Images").map(m => `\`${m.name}\``).join(" ");
  let animeCategory = bot.commands.filter(c => c.category === "Anime").map(m => `\`${m.name}\``).join(" ");
  let funCategory = bot.commands.filter(c => c.category === "Fun").map(m => `\`${m.name}\``).join(" ");
  let gameCategory = bot.commands.filter(c => c.category === "Games").map(m => `\`${m.name}\``).join(" ");
  let currencyCategory = bot.commands.filter(c => c.category === "Currency").map(m => `\`${m.name}\``).join(" ");
  let utilityCategory = bot.commands.filter(c => c.category === "Utility").map(m => `\`${m.name}\``).join(" ");
  let developerCategory = bot.commands.filter(c => c.category === "Developer Commands").map(m => `\`${m.name}\``).join(" ");
  return { botInfoCategory, animalsCategory, imagesCategory, animeCategory, funCategory, currencyCategory, gameCategory, utilityCategory, developerCategory };
}