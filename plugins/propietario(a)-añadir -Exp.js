import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}ð¿ðð½ð ð¿ð ðððððððð¼ð ð¼ð ðððð¼ððð *@tag*\n\nððð ðððð ðð¼ð ððð ðððð *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}ððððððð ðð¼ ð¾ð¼ðððð¿ð¼ð¿ ð¿ð ððð\n\nððððð ððð ðððð½ðð ðð ððð`
if (isNaN(txt)) throw `${mg}ððð ðððð½ðððð, ðððð ððððððð ððððððð\n\nðð ðððð½ððð, ðððð ððððð ðððð½ððð`
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp += pjk
if (exp < 1) throw `${mg}ðð ðððððð ðððððð ð¿ð ððððððððð¾ðð¼ (ððð) ðð *1*\n\nððð ððððððð ðððð½ðð ðððð ððððððððð¾ð (ððð) ðð *1*`
let users = global.db.data.users
users[who].exp += xp

conn.sendHydrated(m.chat, `â­â[ ððððððððð¾ðð¼ | ððð ð]ââ¬£\nâ\nâá¦ *PARA | FOR:*\nâá¦ *${text}*\nââââââââââââââââââ\nâá¦ *SE LE AÃADIÃ | NOW YOU HAVE*\nâá¦ *${xp} EXP* ð\nâ\nâ°âââââââââââââââ¬£`, wm, null, md, 'ðð¹ð®ððµ-ðð¼ð', null, null, [
['ð ððð£ðª ð¼ð«ðð£ð©ðªð§ð | ððð ð', '.rpgmenu'],
['ðð¤ð¡ð«ðð§ ðð¡ ððð£ðªÌ | ð½ððð  ð©ð¤ ððð£ðª âï¸', '/menu']], m)
}
handler.help = ['addxp <@user>']
handler.tags = ['xp']
handler.command = ['aÃ±adirxp', 'aÃ±adirexp', 'aÃ±adirexperiencia', 'darexperiencia', 'darxp', 'darexp'] 
handler.group = true
handler.rowner = true
export default handler
