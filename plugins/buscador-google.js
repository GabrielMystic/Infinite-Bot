import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default
let full = /f$/i.test(command)
let text = args.join` `
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}πππΎπππ½πΌ ππ πππ ππππππ π½πππΎπΌπ\nπππππππ\n*${usedPrefix + command} Flash*\n\nππππ πππΌπ πππ ππΌππ ππ πππΌππΎπ πππ\nπππΌππππ\n*${usedPrefix + command} flash*`, m)
let pp = './media/menus/Menu1.jpg'
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text)
let msg = search.articles.map(({
// header,
title,
url,
description
}) => {
return `*${title}*\n_${url}_\n_${description}_\nβββββββββββββββββ`
}).join('\n\n')

let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
conn.sendHydrated(m.chat, info, wm, pp, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['πππ£πͺ π½πͺπ¨π¦πͺππππ¨ | ππππ§ππππ¨ π', '#buscarmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,) 

try {
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch (e) {
m.reply(msg)
}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i
handler.exp = 40
handler.exp = 3
export default handler
