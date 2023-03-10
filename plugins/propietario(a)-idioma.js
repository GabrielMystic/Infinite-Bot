import translate from '@vitalets/google-translate-api'
import * as fs from 'fs'
import { es, en, id, ar, pt } from '../lib/idiomas/total-idiomas.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let texto = `*Idioma de FlashBot cambiado Correctamente:* `
let texto2 = `*Seleccione el idioma para FlashBot*`
let texto3 = `*Los Comandos no cambiaran de Idioma, solo el contenido del Mensaje*`
let idioma = await translate(`${texto}`, { to: args[0], autoCorrect: true })
let idioma2 = await translate(`${texto2}`, { to: lenguajeGB.lenguaje(), autoCorrect: true })
let idioma3 = await translate(`${texto3}`, { to: lenguajeGB.lenguaje(), autoCorrect: true })

try {  
if (args[0] == 'es'){
global.lenguajeGB = es
await conn.sendButton(m.chat, lenguajeGB['smsAvisoEG']() + idioma.text + '\n' + 'α ```EspaΓ±ol```', wm, null, [[`βοΈ π  π π‘ π¨`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'en'){
global.lenguajeGB = en
await conn.sendButton(m.chat, lenguajeGB['smsAvisoEG']() + idioma.text + '\n' + 'α ```English```', wm, null, [[`βοΈ π  π π‘ π¨`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'id'){
global.lenguajeGB = id
await conn.sendButton(m.chat, lenguajeGB['smsAvisoEG']() + idioma.text + '\n' + 'α ```Bahasa Indonesia```', wm, null, [[`βοΈ π  π π‘ π¨`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'ar'){
global.lenguajeGB = ar
await conn.sendButton(m.chat, lenguajeGB['smsAvisoEG']() + idioma.text + '\n' + 'α ```ΨΉΨ±Ψ¨```', wm, null, [[`βοΈ π  π π‘ π¨`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'pt'){
global.lenguajeGB = pt
await conn.sendButton(m.chat, lenguajeGB['smsAvisoEG']() + idioma.text + '\n' + 'α ```PortuguΓͺs```', wm, null, [[`βοΈ π  π π‘ π¨`, `${usedPrefix}menu`]], fkontak, m)
}else{
  
const sections = [{
title: 'β¨ IDIOMAS DISPONIBLES : AVAILABLE LANGUAGES β¨',
rows: [
{title: "π EspaΓ±ol", rowId: `${usedPrefix + command} es`},
{title: "π English", rowId: `${usedPrefix + command} en`},
{title: "π Bahasa Indonesia", rowId: `${usedPrefix + command} id`},
{title: "π ΨΉΨ±Ψ¨", rowId: `${usedPrefix + command} ar`},
{title: "π PortuguΓͺs", rowId: `${usedPrefix + command} pt`}]}]

const listMessage = {
text: idioma2.text + '\n\n' + idioma3.text,
footer: `β¦ EspaΓ±ol = ${usedPrefix + command} es
β¦ English = ${usedPrefix + command} en
β¦ Bahasa Indonesia = ${usedPrefix + command} id
β¦ ΨΉΨ±Ψ¨ = ${usedPrefix + command} ar
β¦ PortuguΓͺs = ${usedPrefix + command} pt\n\n` + wm,
title: `${htki} Idioma : Language π`,
buttonText: `Seleccionar : Select`,
sections }
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}
}catch(e){
await m.reply(`${fg}\`\`\`NO SE LOGRΓ CAMBIAR DE IDIOMA, REPORTE ESTE COMANDO ${usedPrefix + command} CON EL COMANDO ${usedPrefix}reporte\`\`\``) 
console.log(e) 
}}

handler.command = /^(idioma|languaje|idiomas|languajes|languages)$/i
handler.owner = true

export default handler
