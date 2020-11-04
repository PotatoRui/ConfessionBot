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


    var list = client.guilds.cache.get('333573514856628225');
    // console.log(list.members.cache.get(message.author.id));

    if (list.members.cache.get(message.author.id)) {
        // there is a GuildMember with that ID


        // console.log(command);
        if (message.content.startsWith(prefix) == true && command == "a") {
            console.log(1);
            if (argst[0] == undefined || argst[0] == null) {
                message.reply("Wrong input! `bc!a <messageid>`")
                    .then(msg => {
                        msg.delete({
                            timeout: 2000
                        })
                    });
            } else {


                const announceEmbed = new Discord.MessageEmbed()
                    .setColor("#3471eb")
                    .setTimestamp();
                // .setDescription(message.channel.messages.fetch(argst[0]));

                // console.log(argst);

                message.channel.messages.fetch(argst[0]).then(messagea => {
                        // console.log(messagea.embeds[0].description);
                        var msgs = messagea.embeds[0].description;
                        var msgsarr = messagea.embeds[0].description;

                        var array = [],
                            c = 0;

                        msgsarr.split(/\[(?:[^][]*|(R))*\]/).filter(Boolean).forEach(e =>
                            // Increase / decrease counter and push desired values to an array
                            e == '(' ? c++ : e == ')' ? c-- : c > 0 ? array.push('(' + e + ')') : array.push(e)
                        );

                        msgs = msgs.replace(`[${array[array.length - 1]}]`, "");
                        // console.log(array);

                        let reportEmbed = new Discord.MessageEmbed()
                            .setColor("#3471eb")
                            .setDescription(array.join(""))

                        message.delete().catch(O_o => {
                            message.reply("Posted Successfully")
                        });


                        // brgy
                        client.guilds.cache.get("333573514856628225").channels.cache.get("759297328263331840").send(reportEmbed);

                        // potato lab confessions
                        client.guilds.cache.get("713005672244969562").channels.cache.get("754257977992675398").send(reportEmbed);
                        message.delete();
                        return;
                    })
                    .catch(err => message.reply("Error: Msg ID not Found"))



            }
        } else {
            if (message.channel.type == "dm") {
                    talkedRecently.set(message.author.id, Date.now() + 60000);
                    // Adds the user to the set so that they can't talk for a minute
                    // message.reply(`<@${message.author.id}>, awts landi ssob bawal dm. ekis yan lods.`);
                    const potato = client.users.cache.get('415835056020652032');
                    const miere = client.users.cache.get('323473522179571712');


                    const announceEmbed = new Discord.MessageEmbed()
                        .setColor("#3471eb")
                        .setTimestamp()
                        .setDescription(`${args.join(" ")}\n\n[FROM: ${message.author.tag}]`);

                    // logs potto lab
                    // console.log(announceEmbed);
                    client.guilds.cache.get("713005672244969562").channels.cache.get("754269974180265994").send(announceEmbed);

                    // logs users dm
                    // potato.send(`${args.join(" ")}\n\n[FROM: ${message.author.tag}]`);
                    // console.log(announceEmbed);
                    potato.send(announceEmbed);
                    miere.send(announceEmbed)
                        .then(
                            message.reply("Your Message has been received!")
                        );

                    // send msgs
                    var msg = args.join(" ");

                    if (msg == null || msg == undefined) return;

                    let reportEmbed = new Discord.MessageEmbed()
                        .setColor("#3471eb")
                        .setDescription(args.join(" "))

                    // message.delete().catch(O_o => { message.reply("Posted Successfully")});


                    // brgy
                    client.guilds.cache.get("333573514856628225").channels.cache.get("759297328263331840").send(reportEmbed);

                    // potato lab confessions
                    client.guilds.cache.get("713005672244969562").channels.cache.get("754257977992675398").send(reportEmbed);
                    // message.delete();
                    return;
            }
        }
    } else {
        message.reply("https://discord.gg/thebrgyph");
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
