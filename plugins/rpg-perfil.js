import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://www.google.com/search?q=flash&client=ms-android-samsung-gj-rev1&prmd=ivn&sxsrf=AJOqlzXCTuKBhEXBG6J5UayIuO3QPYw3TA:1677420804239&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjYprO5r7P9AhXgqpUCHWB1CvQQ_AUoAXoECAIQAQ#imgrc=csncbCoMg5QGPM'
//const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)         //pp = await conn.getProfilePicture(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str =
`â ðððð½ðð ${name}
ââââââââââââââââââ
â ðððððð ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
ââââââââââââââââââ
â ðððð¼ð¾ð wa.me/${who.split`@`[0]}${registered ?'\nââââââââââââââââââ\nâ ðð¿ð¼ð¿ ' + age + ' *aÃ±os*' : ''}
ââââââââââââââââââ
â ððððððð *${limit}* ðð ðð¨ð¤ð¨
ââââââââââââââââââ
â ðððððððð¼ð¿ð(ð¼) ${registered ? 'â': 'â'}
ââââââââââââââââââ
â ððððððð ${prem ? 'â' : 'â'}
ââââââââââââââââââ
â ðððððð ð¿ð ððððð
â *${sn}*`
conn.sendButton(m.chat, str, wm, await(await fetch(pp)).buffer(), [['ððð§ðððððð§ | ððð§ððð®', '/verificar â'], ['ððªð ðð¢ð¥ðððð ð¡ð ðð«ðð£ð©ðªð§ð!! ð', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
