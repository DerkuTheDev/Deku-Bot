const Discord = require("discord.js")

module.exports = {
name: "stats",
category: "Bot Information",
  
run: async (bot, message, args) => {

  let ping = bot.ws.ping
  
let totalSeconds = (bot.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

let uptime = `${days}D:${hours}H:${minutes}M:${seconds}S`;

let memoryUsage = Object.entries(process.memoryUsage()).map(u => `${u[0]}: ${Math.round(u[1] / 1024 / 1024 * 100) / 100}MB`).join("\n");
let statsEmbed = new Discord.MessageEmbed()
.setColor("#2f3136")
.addFields(
  {
    name: "Uptime:",
    value: `\`\`\`\n${uptime}\n\`\`\``,
  },
  {
    name: "Ping:",
    value: `\`\`\`\n${ping}\n\`\`\``,
  },
  {
    name: "Memory Usage:",
    value: `\`\`\`\n${memoryUsage}\n\`\`\``,
  }
)
message.channel.send(statsEmbed)
console.log(uptime)
}
}
//.replace(/0 .*?, /g, '')
