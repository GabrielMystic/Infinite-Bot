import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*β­ββ[ πΎππππππΎπΌπΏπ | πππππΎπ ]ββββ¬£*\n*β*\n*βπ* ${text}\n*β*\n*β°βββββββββββββββββββ¬£*`, 'β *πΎππππππΎπΌπΏπ ππππΎππΌπ*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['π ππ£ππ€ πππππππ‘', '.cuentasfb'],['πππ£πͺ', '.menu']], false, { 
contextInfo: { externalAdReply: {
title: 'ππ‘ππ¨π-π½π€π© : ππππ§πππ‘',
body: 'Super Bot WhatsApp', 
sourceUrl: `https://www.instagram.com/gabrielacosta_15`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} β *El mensaje fue enviado a ${groups.length} Grupo(s)*\n*Es posible que no se haya enviado a todos los Grupos. Disculpe.*\n\nβ *The message was sent to ${groups.length} Group's*\n*May not have been sent to all Groups. Excuse me.*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicargrupo|comunicadogrupo|comunicargrupos|comunicadogrupos|broadcastgc|bcgc)$/i
handler.rowner = true
handler.exp = 500
//handler.owner = true
export default handler
