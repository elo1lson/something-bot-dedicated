'use strict'
require('dotenv').config()
const base = require('./src/structures/base.js')
const client = new base()
client.login(process.env.TOKEN)
client.loadEvents()
client.loadVanilla()