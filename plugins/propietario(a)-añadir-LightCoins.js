import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*\n\n𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙏𝘼𝙂 𝙏𝙃𝙀 𝙐𝙎𝙀𝙍 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙇𝘼 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀 𝗟𝗜𝗚𝗛𝗧𝗖𝗢𝗜𝗡𝗦\n\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙉𝙐𝙈𝘽𝙀𝙍 𝙊𝙁 𝗟𝗜𝗚𝗛𝗧𝗖𝗢𝗜𝗡𝗦`
if (isNaN(txt)) throw `${mg}𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n\n𝙉𝙊 𝙎𝙔𝙈𝘽𝙊𝙇𝙎, 𝙅𝙐𝙎𝙏 𝙀𝙉𝙏𝙀𝙍 𝙉𝙐𝙈𝘽𝙀𝙍𝙎`
let lightcoins = parseInt(txt)
let money = lightcoins
let pjk = Math.ceil(lightcoins * pajak)
money += pjk
if (money < 1) throw `${mg}𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝘿𝙀 𝗟𝗜𝗚𝗛𝗧𝗖𝗢𝗜𝗡𝗦 𝙀𝙎 *1*\n\n𝙏𝙃𝙀 𝙈𝙄𝙉𝙄𝙈𝙐𝙈 𝙉𝙐𝙈𝘽𝙀𝙍 𝙁𝙍𝙊𝙈 𝗟𝗜𝗚𝗛𝗧𝗖𝗢𝗜𝗡𝗦 𝙄𝙎 *1*`
let users = global.db.data.users
users[who].money += lightcoins

conn.sendHydrated(m.chat, `╭━━━[ 𝗟𝗜𝗚𝗛𝗧𝗖𝗢𝗜𝗡𝗦 ⚡ ]━━━⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *${lightcoins} LightCoin(s)* ⚡\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝙇𝙞𝙜𝙝𝙩𝙣𝙞𝙣𝙜-𝘽𝙤𝙩', null, null, [
[' 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂 ', '.rpgmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m)
}
handler.help = ['addgb <@user>']
handler.tags = ['lightcoins']
handler.command = ['añadirlightcoins', 'añadirlight', 'añadircoins', 'darlightcoins', 'darlight', 'darcoins'] 
handler.group = true
handler.rowner = true
export default handler
