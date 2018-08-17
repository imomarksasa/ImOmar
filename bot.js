const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});



client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setDescription(`WelCome To Ghost`)
 

var channel =member.guild.channels.find('name', 'public-chat')
if (!channel) return;
channel.send({embed : embed});
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
