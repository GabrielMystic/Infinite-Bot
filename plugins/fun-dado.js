/*const dir = [
  'https://tinyurl.com/dados01',
  'https://tinyurl.com/dados02',
  'https://tinyurl.com/dados03',
  'https://tinyurl.com/dados04',
  'https://tinyurl.com/dados05',
  'https://tinyurl.com/dados06'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['dado', 'dados'] 
export default handler*/


let handler = async(m, { conn, text, args, usedPrefix, command }) => {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}πππ ππΌπππ ππππππ, ππ πΏπΌπΏπ ππ ππππΌ πΎπππΌππΏπ\n\nππππΌππ ππΌππ, ππππ πΏππΎπ ππ π½ππππ πΎπππΌπππΏ`, m)
await conn.sendFile(m.chat, `https://violetics.pw/api/random/dadu?apikey=${Key360}`, 'sticker.webp', '', m, { asSticker: true })}
handler.help = ['dado']
handler.tags = ['game'] 
handler.command = /^(dado|dados)/
handler.exp = 50
export default handler

 /*import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}πππ πΎπππΌππΏππ πΏπ ππππΎππππ ππππΌπ πΏπππΌπΎππππΌπΏππ πππ *#on stickers* ππΌππΌ πΌπΎππππΌπ\n\nπππ ππππΎππππ πΎππππΌππΏπ πΌππ πΏπππΌπ½πππΏ πππ *#on stickers* ππ πππΌπ½ππ`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = 'π πππ©ππ½π€π©-ππΏ'
let nombre2 = 'πππ©π πΏππ€π¨'
 
const s = [
'https://media.giphy.com/media/h5cY0X4NcHP2JiFXNG/giphy.gif', 
'https://media.giphy.com/media/SSinJFA7xCih5g9F1c/giphy.gif',
'https://media.giphy.com/media/kBHH2rfm1VHIYgodQx/giphy.gif',
'https://media.giphy.com/media/UpDKR8EYG5zFtYhWNz/giphy.gif',
'https://media.giphy.com/media/h8mwX2Tt1R2oIOhszC/giphy.gif',
'https://media.giphy.com/media/iGeW8L2Pvzzbtf6jII/giphy.gif'
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
handler.help = ['dado']
handler.tags = ['game'] 
handler.command = /^(dado|dados)/
handler.exp = 50
export default handler */
