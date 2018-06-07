const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start( async(ctx, next) => {
    const from = ctx.update.message.from
    console.log(from)
    await ctx.reply(`Seja bem vindo, ${from.first_name}!`)
    next()
})

bot.on('text', async (ctx, next) => {
        await ctx.reply('Você gostaria de fazer um orçamento?')
        next()
})
 bot.hears('sim', ctx => ctx.reply('Otimo.'))
 bot.hears(['não','nao'], ctx => ctx.reply('Tudo bem, em que posso te ajudar?'))




bot.startPolling()