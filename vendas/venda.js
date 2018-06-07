const env = require('../.env');
const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
const moment = require('moment');
const bot = new Telegraf(env.token);

const tecladoOrcPed = Markup.keyboard([
    ['Orçamento', 'Pedido']
]);

bot.start(async ctx => {
    if(ctx.update.message.from.id === 123){
        await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}!`)
        await ctx.reply(`Para facilitar e agilizar o atendimento sempre que possivel \nirei disponibilizar um teclado`
        +`\nComeçamos... O que você gostaria de fazer?`,
        Markup.keyboard(['Orçamento', 'Pedido']).resize().oneTime().extra())
    } else {
       await ctx.reply(`Por favor digite seu CNPJ/CPF, sem digitos somente numero.`)
       bot.hears(/(\s{11})/, ctx => {
           const cpf = moment(ctx.match[1], 'aaaaaaaaaaa')
           ctx.reply(`CPF: ${cpf.toString('aaaaaaaaaaa')}`)
       })
    } 
});

bot.hears(['Orçamento', 'Pedido'], async ctx => {
    await ctx.reply(`Ok! Vamos começar a preparação do seu ${ctx.match}`)
})

bot.startPolling();