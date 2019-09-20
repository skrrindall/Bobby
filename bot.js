const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if (msg.content === `${prefix}Bob`) {
    msg.reply('Marley!');
  } else if(msg.content === `${prefix}gay`) {
   msg.channel.send('U r gay', {files: ['../Test/download.jpeg']})
  } else if(msg.content === `${prefix}kick`) {
    // Check for any mentions 
      // Then kick the member using .kick();
  } else if(msg.content === `${prefix}ban`) {
    // Check for any mentions
      // Then ban the member using .ban();
  }
  
});

client.on("guildMemberAdd", (member) => {
    // Do what you want to do when a member joins with the member object         
});

client.login('NjI0NDAxOTk5Nzg1NDkyNDkw.XYQdsw.a1oqNWGRWCOzv-GSh5rq7KuWfEg');