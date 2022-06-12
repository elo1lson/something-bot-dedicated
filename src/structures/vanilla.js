module.exports = class Vanilla {
  constructor(ctx,opts) {
    this.ctx = ctx
    this.name = opts.name
    this.aliases = opts.aliases
    this.avaliable = opts.avaliable
  }
}