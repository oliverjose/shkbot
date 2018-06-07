const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start( async ctx => {
    const from = ctx.update.message.from
    console.log(from)
    await ctx.reply(`Seja bem vindo, ${from.first_name}!`)
})

bot.on('text', async (ctx, next) => {
    await ctx.reply(`${ctx.update.message.text}, Você gostaria de fazer um orçamento?`)
    next()
})

bot.hears('sim', async (ctx, next) => {
    await ctx.reply('Otimo, e o que procura?')
    next()
})
bot.hears(['não','nao'], ctx => ctx.reply('Tudo bem, em que posso te ajudar?'))




bot.startPolling()