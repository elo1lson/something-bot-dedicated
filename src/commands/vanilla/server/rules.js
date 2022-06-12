'use strict'

const Vanilla = require('../../../structures/vanilla.js')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Vanilla {
    constructor(ctx) {
        super(ctx, {
            name: 'rules',
            aliases: ['avt'],
            avaliable: true
        })

    }
    async run() {
        let embed = new MessageEmbed()
        .setDescription("Channel rules: <#985616206109216829>")
        return this.ctx.message.channel.send({
            embeds: [embed]
        })
    }
}