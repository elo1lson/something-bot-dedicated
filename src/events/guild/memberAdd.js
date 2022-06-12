const Event = require('../../structures/event.js')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'guildMemberAdd'
        })
    }

    execute = async (member) => {
        let embed = new MessageEmbed()
            .setTitle('New Member!')
            .setColor('RED')
            .setImage('https://static.wixstatic.com/media/c0bac9_1d1567c0eee34063a4a1fb9c8187aacc~mv2.png/v1/crop/x_0,y_444,w_6046,h_4332/fill/w_560,h_402,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled_Artwork%2010.png')
            .setDescription(`${member} just got in ${member.guild.name} don't forget to read our rules`)
            .addField('Rules channel', `<#985616206109216829>`)

        this.client.channels.cache.get('985611039091613747').send({
            embeds: [embed]
        }
        )
    }
}