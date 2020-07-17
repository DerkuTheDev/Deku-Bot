const Discord = require("discord.js")
const Canvas = require('canvas');
 
module.exports = {
name: "profile",
category: "Utility",
run: async (bot, message, args) => {
 
function textFuckOff(text,n){
return `${text.slice(0, n)}`}
   
function textFuckOff2(text,n){
return text.slice(0,n)+' '}
 
    let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args.join(' ')) || message.guild.members.cache.find(m => m.user.id === args.join(' ')) || message.member;
    let user = member.user;
 
    let prevmoney = await bot.db.collection("Money").findOne({"User_ID": user.id})


    if (prevmoney == null) {
        prevmoney = 0;
        console.log(prevmoney)
    }
    console.log(prevmoney)
 let name = member.nickname || user.username;
 let icon = user.displayAvatarURL({ format: 'png', size: 512})
 let userStatus = user.presence.status.charAt(0).toUpperCase() + user.presence.status.slice(1)
 let color = member.roles.highest.hexColor
 if (color === '#000000') {
color = '#232829'
 }
let customStatus = user.presence.activities.find(a => a.type === "CUSTOM_STATUS");
customStatus ? customStatus = customStatus.state : customStatus = "None";
 
//let Bubblegum = new Font('Bubblegum', fontFile('Bubblegum.ttf'));
const canvas = Canvas.createCanvas(750, 200);
const ctx = canvas.getContext('2d');
 
 let image = "https://media1.tenor.com/images/d8a030a99a3475c938607856c0ac7968/tenor.gif?itemid=16262406"
 //ctx.loadFont(Bubblegum)
ctx.fillStyle = '#232829'
ctx.fillRect(0, 0, 750, 200)
 
ctx.textAlign = 'left'
ctx.font = "50px Helvetica"
 
ctx.fillStyle = "white"
 
 let fuckOff = textFuckOff2(name, 20)
ctx.fillText(fuckOff, 10, 65)
 
ctx.font = "25px Helvetica"
 
 
 
const status = {
online: "https://cdn.discordapp.com/emojis/709285149929635961.png?v=1",
dnd: "https://cdn.discordapp.com/emojis/709286381347667978.png?v=1",
idle: "https://cdn.discordapp.com/emojis/709287172745724015.png?v=1",
offline: "https://cdn.discordapp.com/emojis/709287117984890980.png?v=1"
}
function getStatusImage(status1){
return status[status1]
}
let statusimage = await Canvas.loadImage(getStatusImage(user.presence.status))
 
let statusReplace = userStatus.toString();
statusReplace = userStatus.replace("Dnd", "Do Not Disturb");
ctx.beginPath()
ctx.font = "25px Helvetica"
//ctx.fillText(statusReplace, 40, 93)
 
let fuckOff2 = textFuckOff(customStatus, 20)
 
ctx.fillText(`Custom Status: ${fuckOff2}`, 10, 120)

ctx.fillText(`Balance: ${prevmoney.Money} money!`, 10, 175)
 

ctx.save();
    ctx.beginPath();
 
    ctx.arc(640, 100, 85, 0, Math.PI * 2);
 
        ctx.stroke()
 
    ctx.clip();

 let Image =  await Canvas.loadImage(icon)
ctx.drawImage(Image,  555, 15, 175, 175)
ctx.restore();
ctx.save();
 ctx.arc(650, 160, 35, 0, Math.PI * 2);
ctx.clip();
ctx.fillStyle = "#232829";
ctx.fillRect(650, 160, 35, 0);
ctx.restore();
ctx.drawImage(statusimage, 670, 145, 40, 40)
   

const attachment = canvas.toBuffer()
const EMBEDIMAGETHINGY = [new Discord.MessageAttachment(attachment, `profile_card_${name}.gif`)] 

let embed = new Discord.MessageEmbed()
    .setColor(color)
    .setAuthor(`Here is ${name}'s profile!`)
    .attachFiles(EMBEDIMAGETHINGY)
    .setImage(`attachment://profile_card_${name}.gif`);
message.channel.send(embed)
}
}
