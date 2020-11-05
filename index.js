const Discord = require('discord.js');
const humanizeDuration = require('humanize-duration');
const talkedRecently = new Map();

const client = new Discord.Client();


client.on('ready', () => {
    console.log('Ready');

    client.user.setStatus("online");
    client.user.setActivity(" Confessions!", {
        type: 3
    });

    return (console.error);
});



client.on('message', message => {
    const args = message.content.split(/ +/g);


    const prefix = "bc!",
        argst = message.content.slice(prefix.length).trim().split(/ +/g),
        command = argst.shift().toLowerCase();

    // to prevent multiple instance of msgs
    if (message.author.bot) return;
    // to prevent dm cmd exec


    var list = client.guilds.cache.get('SERVER ID HERE');
    
            if (message.channel.type == "dm") {
                    //SEND LOGS TO YOU
                    const potato = client.users.cache.get('YOUR ID HERE');


                    const announceEmbed = new Discord.MessageEmbed()
                        .setColor("#3471eb")
                        .setTimestamp()
                        .setDescription(`${args.join(" ")}\n\n[FROM: ${message.author.tag}]`);


                    // logs users dm
                    potato.send(announceEmbed).then(
                         message.reply("Your Message has been received!")
                     );

                    // send msgs
                    var msg = args.join(" ");

                    if (msg == null || msg == undefined) return;

                    let reportEmbed = new Discord.MessageEmbed()
                        .setColor("#3471eb")
                        .setDescription(args.join(" "))


                    client.guilds.cache.get("SERVER ID HERE").channels.cache.get("CONFESSION CHANNEL ID HERE").send(reportEmbed);

                    // message.delete();
                    return;
            }

});

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}


client.login('');
