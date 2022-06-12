const Event = require('../../structures/event.js')

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'messageCreate'
        })
    }

    execute = async (message) => {


        let prefix = '+'
        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase()

        if (message.author.bot) return;
        if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
        if (!message.content.startsWith(prefix)) return;
        if (cmd.length === 0) return;

        let command = this.client.vanilla.get(cmd)
        console.log(command);

        if (!command) command = this.client.vanilla.get(this.client.aliases.get(cmd))

        let ctx = {
            client: this.client,
            message: message,
            args: args,
          
        }
        command = new command(ctx)

        if (!command) return

        try {
            console.log(command.avaliable)
            if (command.avaliable == false) {
                return message.reply({
                    content: 'Este comando foi desativado por meu criador'
                })
            }
            command.run()
        } catch (err) {
            console.error('Erro:' + err);
        }
    }
}