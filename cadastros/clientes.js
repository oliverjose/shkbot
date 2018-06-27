const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const moment = require('moment')

const { getCliente } = require('../servicos/cadastro_services')

const bot = new Telegraf(env.token)

bot.start(ctx => {
    const nome = ctx.update.message.from.first_name
    ctx.reply(`Seja bem vindo, ${nome}!`)
})

const exibirCliente = async (ctx, clienteId,clienteNovo = false) => {
             const cliente = await getCliente(clienteId)
}
const msg = `
<b>${cliente.id}
</b><b>NOME:</b> ${cliente.nome}
<b>ENDEREÇO:</b> ${cliente.endereco}
<b>CIDADE:</b> ${cliente.cidade}
<b>UF:</b> ${cliente.uf}`


bot.startPolling()

