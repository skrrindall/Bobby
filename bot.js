// NOTE: this is literally just a testing bot
// For those who found this repo and want to use this code. The only thing in  `config.json` is TOKEN and PREFIX
const Discord = require('discord.js');
const client = new Discord.Client();
const { PREFIX } = require('./config.json');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if (msg.content === `${PREFIX}Bob`) {
    msg.reply('Marley!');
  } else if(msg.content === `${PREFIX}gay`) {
   msg.channel.send('U r gay', {files: ['../Test/download.jpeg']})
  } else if(msg.content === `${PREFIX}kick`) {
    // Check for any mentions 
      // Then kick the member using .kick();
  } else if(msg.content === `${PREFIX}ban`) {
    // Check for any mentions
      // Then ban the member using .ban();
  } else if(msg.content === `${PREFIX}summon`) {
    client.guilds.find(guild => guild.name=== 'Bot testing')
    .channels.find(voiceChannel => voiceChannel.name === 'General').join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  } else if(msg.content === `${PREFIX}fuckoff`) {
   client.guilds.find(guild => guild.name === 'Bot testing')
      .channels.find(voiceChannel => voiceChannel.name === 'General').leave()
  }
});

client.on("guildMemberAdd", (member) => {
    const res = ['welcome ShÎthËÆd' , 'Welcome ÇÜmdümþstêr'  ]
    client.guilds.find(guild => guild.name === 'Bot testing')
        .channels.find(channel => channel.name === 'general')
        .send(res[Math.floor(Math.random()*res.length)]);
});

client.login(require('./config.json').TOKEN);