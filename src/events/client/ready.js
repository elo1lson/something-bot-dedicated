const Event  = require('../../structures/event.js')
console.log(Event);

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'ready'
        })
    }

    execute = async () => {
        console.log(`${this.client.user.username} logado [${this.client.guilds.cache.size}] servs.`)

    }
}