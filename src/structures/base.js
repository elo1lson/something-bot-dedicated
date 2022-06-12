'use strict'

const fs = require('fs')
const path = require('path')
const { Collection, Client } = require('discord.js');
module.exports = class extends Client {
    constructor(opts) {
        super({

            intents: 32767,
            allowedMentions: {
                parse: ["users", "roles"],
                repliedUser: false
            },
            ...opts
        })
        this.vanilla = new Collection();
        this.aliases = new Collection();
    }
    loadVanilla() {
        try {
            const commands_path = path.join(__dirname, "..", "commands", "vanilla");
            console.log(commands_path);

         fs.readdirSync(commands_path).forEach(async (local) => {
                const files = fs.readdirSync(path.join(commands_path, local));

                let vanilla;
                for (let file of files) {

                    if (file.endsWith(".js")) {
                        vanilla = require(path.join(commands_path, local, file));
                        let Newvanilla = new vanilla()
                        this.vanilla.set(Newvanilla.name, vanilla);

                        for (let aliase of Newvanilla.aliases) {
                            this.aliases.set(aliase, Newvanilla.name);
                        }
                    }
                }
            });
            console.log('✅[Prefix]: Comandos carregados!')
        } catch (e) {
            console.log('❌[Prefix]: Erro ao carregar os comandos: ' + e)
        }
    }
    loadEvents() {
        try {
            let folder = 'src/events'
            const categories = fs.readdirSync(folder)

            for (const category of categories) {
                const events = fs.readdirSync(`${folder}/${category}`)

                for (const event of events) {
                    const eventClass = require(path.join(process.cwd(), `${folder}/${category}/${event}`))
                    const evt = new (eventClass)(this)

                    this.on(evt.name, evt.execute)
                }
            }
            console.log('✅[Events]: Eventos carregados!')
        } catch (e) {
            console.log('❌[Events]: Erro ao carregar os eventos: ' + e)
        }
    }
}