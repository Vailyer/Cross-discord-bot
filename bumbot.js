
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzMwNzM4MTM3MjkyNzM0NDY0.DDljmw.0GNsbg1d5wKYgwZ6V4ZvwiHGM20';

client.on('ready', () => {
  console.log('I am ready!');
});
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
});

//Password to give role
client.on('message', message => {
  if (message.content === 'bB:ireadtherules') {
    let pretty_cool = message.guild.roles.find("name", "Pretty Cool");
    message.member.addRole(pretty_cool).catch(console.error);
    message.channel.send(`Rejoice! ${message.member} has been upgraded to Pretty Cool! :pudding:`);
    
  }
});
//
client.login(token);