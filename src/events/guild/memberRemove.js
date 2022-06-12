const Event = require('../../structures/event.js')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'guildMemberRemove'
        })
    }

    execute = async (member) => {
        let embed = new MessageEmbed()
            .setColor('RED')
            .setDescription(`${member} left the server`)

        this.client.channels.cache.get('985611039091613747').send({
            embeds: [embed]
        }
        )
    }
}