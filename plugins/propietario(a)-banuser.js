let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `${mg}šššššššš š¼ š¼šššššš šš¼šš¼ š½š¼ššš¼š\nššššššš:\n*${usedPrefix + command} @${global.suittag}*\nšš¼š ššššššš šš š½š¼š\nššš¼šššš\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `${eg}šš/šš¼ šššš¼ššš(š¼) ššš š½š¼ššš¼šæš(š¼) \nšš šššæšš¼ ššš¼š š¼ ${gt}\n\nššš šššš šš¼š š½š¼ššššæ š±\nš¾š¼šššš ššš šš¹š®ššµ-šš¼š`, m)
}
handler.command = /^banuser$/i
handler.rowner = true
export default handler 
