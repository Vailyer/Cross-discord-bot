
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzMwNzM4MTM3MjkyNzM0NDY0.DDljmw.0GNsbg1d5wKYgwZ6V4ZvwiHGM20';
var eightball = require("./eightball.json").eightball;

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setGame("it straight");
});
//creating random number
function randomNumber (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
//On Join event
client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.find('name', 'vanilla');

  if (!channel) return;

  channel.send(`Welcome to the Faceless Family, ${member}! Enjoy your stay :pudding:`);
});
//On Leave
client.on('guildMemberRemove', member => {

  const channel = member.guild.channels.find('name', 'vanilla');

  if (!channel) return;

  channel.send(`${member} just left! Was it something I said? D:`);
});

//!test will reply if the bot is working
client.on('message', msg => {
  if (msg.content === '!test') {
   msg.reply('BumBot Is Online!');
  }
  //Password to give role
  if (msg.content === 'bB:ireadtherules') {
    let pretty_cool = msg.guild.roles.find("name", "Pretty Cool");
    msg.member.addRole(pretty_cool).catch(console.error);
    msg.channel.send(`Rejoice! ${message.member} has been upgraded to Pretty Cool! :pudding:`);
  }
  //Eight Ball
  if (msg.content.startsWith("<@")) {
    if (msg.content.endsWith("?")) {
      if (msg.mentions.users.has("330738137292734464")) {
        var lowbnd = 0;
        var highbnd = eightball.length - 1;   
        var number = randomNumber(lowbnd, highbnd);
        msg.reply(eightball[number]);
      }
    }
  }

});
client.login(token);