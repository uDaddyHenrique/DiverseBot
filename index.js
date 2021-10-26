const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json"); 

client.login(config.token); 

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }

  client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == 'ferinha')
    return
    if(message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
    return message.channel.send(`🏆 | **Olá ${message.author}**, **veja meus comandos com** **${config.prefix}help**!`)
    }
    }); 
});