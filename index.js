const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json")
const Discord = require("discord.js"); 
const {MongoClient} = require("mongodb")
const fs = require("fs");
//const db = require("quick.db")
const bot = new Discord.Client({ disableEveryone: true });
const cooldowns = new Discord.Collection();
const DBL = require("dblapi.js");
const { PNGStream } = require("canvas");
const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcwMTc0MTIzNzk2Njk5NTQ1NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTkzMDcyNTk3fQ.M3rO-J0iOFUn1wJGwNQ0Qje1zaykSdqEFjPcKaCHZ7M", bot);
const DBLwebhook = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcwMTc0MTIzNzk2Njk5NTQ1NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTkzMDcyNTk3fQ.M3rO-J0iOFUn1wJGwNQ0Qje1zaykSdqEFjPcKaCHZ7M", { webhookPort: 2000, webhookAuth: 'Ginge2019' });
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

  fs.readdir("./commands/", (err, files) => {
  files.forEach(f => {
    const file = require("./commands/" + f);
    if (!file.name) throw f + "does not export a name property!";

    bot.commands.set(file.name, file);
    if (file.aliases && Array.isArray(file.aliases))
      file.aliases.forEach(a => bot.aliases.set(a, file.name));
  });
});

DBLwebhook.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
DBLwebhook.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
});

bot.on("ready", async () => {
  console.log("BOT READY");
  console.log("Connected to Mongo")
});

  let mongoDB = MongoClient.connect(`mongodb+srv://Tepper:91OvUjP0EqLGaIJO@cluster0.6guyy.azure.mongodb.net`, {useUnifiedTopology:true} ).then(mongoDB => {
  bot.db = mongoDB.db("Deku-DB");
}).catch(console.error)

bot.on("ready", async () => {
  console.log(
    `${bot.user.username} is online on ${bot.guilds.cache.size} servers!`
  );

  bot.on("guildCreate", async guild => {
 let channel = bot.channels.cache.get("728260629466447892")

 let guildEmbed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setTitle("Joined Server!")
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setDescription(`${bot.user.username} has been added to another server!`)
    .addFields(
      { 
        name: `Name`, 
        value: `\`\`${guild.name}\`\``,
        inline: true
      }, 
      { 
        name: `Members`,  
        value: `\`\`${guild.memberCount}\`\``,
        inline: true
      },
      { 
        name: `ID`, 
        value: `\`\`${guild.id}\`\``,
        inline: true
      }
      )
    .setFooter(`${bot.guilds.cache.size} servers`, bot.user.displayAvatarURL({ format: 'png', dynamic: true}))
    channel.send(guildEmbed)
    console.log(`Joined Guild - ${guild.name} with ${guild.members.cache.size} members!`)
  })

    bot.on("guildDelete", guild => {
  let channel = bot.channels.cache.get("728260629466447892")

  let guildEmbed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setTitle("Left Server!")
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setDescription(`${bot.user.username} has been removed from a server...`)
    .addFields(
      { 
        name: `Name`, 
        value: `\`\`${guild.name}\`\``,
        inline: true
      }, 
      { 
        name: `Members`,  
        value: `\`\`${guild.memberCount}\`\``,
        inline: true
      },
      { 
        name: `ID`, 
        value: `\`\`${guild.id}\`\``,
        inline: true
      }
      )
    .setFooter(`${bot.guilds.cache.size} servers`, bot.user.displayAvatarURL({ format: 'png', dynamic: true}))
    channel.send(guildEmbed)
    console.log(`Left Guild - ${guild.name} with ${guild.members.cache.size} members`)
  })
 
dbl.on('posted', () => {
  console.log('Server count posted!');
})
dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})

});  
    let ignoredGuilds = ["264445053596991498", "343572980351107077"];
    let members = bot.guilds.cache
      .filter(g => !ignoredGuilds.includes(g.id))
      .reduce((s, v) => s + v.members.cache.size, 0)
      .toLocaleString();

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  bot.prefix = "d-";
const find = await bot.db.collection("Prefixes").findOne({"g_id":message.guild.id});
if (find && find.prefix) bot.prefix = find.prefix;
if(message.content == "<@!701741237966995456>") 
{
  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Oh hay! You pinged.. me ;-;")
    .setDescription(`My prefix is \`\`${bot.prefix}\`\`!`)
    .addFields(
      {
        name: "Help Command",
        value: `\`\`\`\n${bot.prefix}help\n\`\`\``
      },
      {
        name: "Info Command",
        value: `\`\`\`\n${bot.prefix}info\n\`\`\``
      }
    )
    .setFooter(bot.user.username, bot.user.displayAvatarURL())
      message.channel.send(embed)
};
  if (!message.content.startsWith(bot.prefix)) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0].slice(bot.prefix.length);
  let args = messageArray.slice(1);

  let command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));

  if (!command) return;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 5) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      let randomText = ["Stop spamming me!", "Calm Down!"];
      let index = Math.floor(Math.random() * Math.floor(randomText.length));
      let Embed = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setTitle(`${message.author.username} ${randomText[index]}`)
        .setDescription(`Please wait **${timeLeft.toFixed(1)}** more second(s) before reusing the \`\`${command.name}\`\` command.`);

      return message.channel.send(Embed);
        }
      }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  
  command.run(bot, message, args);
});

bot.on("error", err => {
  console.log(new Date("YYYY-MM-DD HH:mm:ss"));
  console.log(err);
   let channel = bot.channels.cache.get("726359470309113916")
   channel.send(err.message)
});

bot.login(tokenfile.token);
