let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let name = await conn.getName(m.sender)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- Nombre
  let nowner = `${wm.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `
โข @${wm.split`@`[0]} โข
------- ${wm} -------
`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => imagen1[1]) 
let teksbio = `
๐๐น๐ฎ๐๐ต-๐๐ผ๐ โก
*es.me/5493491456806*
*---------------------*
๐๐๐๐ฅ๐๐๐ - ๐ผ๐๐๐๐๐๐๐พ๐๐ผ
*${asistencia}*
`
  let teks = ' '
const sections = [
   {
	title: `PROPIETARIO/OWNER`,
	rows: [
	    {title: "๐ฑ โข NOMBRE", rowId: ".owner nomor"},
	{title: "๐ โข NUMERO", rowId: ".owner bio"},
	{title: "๐ โข CUENTAS OFICIALES", rowId: ".cuentasgb"},
	{title: "โก โข GRUPOS", rowId: ".grupos"},
	{title: "๐ โข SCRIPT", rowId: ".sc"},
	]
    },{
	title: `โโโโโโโยทโข APOYA AL BOT โโโโโโโยทโข`,
	rows: [
	{title: "๐ค โข INSTALARBOT", rowId: ".instalarbot"},
	{title: "๐ โข PREMIUM", rowId: ".pasepremium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `โญโโโโฆ *OWNER โฆโโโโโฌฃ
โแ HOLA ๐ ${name}
โโโโโโโโโโโโโโโโโโโโโโโโ
โ${wm}
โฐโโโโโโฆ *${vs}* โฆโโโโโฌฃ`,
  buttonText: "HAGA CLICK AQUI",
  sections
}

  try {
    if (/(contacto|owner|creator|propietario|dueรฑo|dueรฑa|propietaria|dueรฑo|creadora|creador)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, "Nombre del bot : FlashBot โก", m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "https://www.instagram.com/gabrielacosta_15", "Instagram",null, [null, null], m)
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`โฎโฐ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueรฑo|dueรฑa|propietaria|dueรฑo|creadora|creador)$/i

export default handler
