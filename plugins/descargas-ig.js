import instagramGetUrl from 'fg-ig'
let handler = async (m, { conn, args, usedPrefix, command }) => {
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}πππππππ ππ ππππΌπΎπ πΏπ πππππΌπππΌπ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ π πππΌπππ\nπππππππ\n*${usedPrefix + command} https://www.instagram.com/p/CmUv48DLvxd/?igshid=MDM4ZDc5MmU=*\n\nπππππ πΌ πππππΌπππΌπ ππππ ππ πΏππππππΌπΏ ππππ πππΏππ ππ πππΌππ\nπππΌππππ\n*${usedPrefix + command} https://www.instagram.com/p/CmUv48DLvxd/?igshid=MDM4ZDc5MmU=*`
let results = (await instagramGetUrl(args[0])).url_list[0]

await conn.reply(m.chat, wait, fkontak,  m)
await conn.reply(m.chat, waitt, fkontak,  m)
await conn.reply(m.chat, waittt, fkontak,  m)
await conn.reply(m.chat, waitttt, fkontak,  m)
await conn.sendFile(m.chat, results, 'instagram.mp4', `β¨ *ENLACE | URL:*\n${args}\n\n${wm}`, m)}

handler.help = ['instagram <link ig>']
handler.tags = ['downloader']
handler.command =/^(instagram|ig(dl)?)$/i
handler.limit = 2
handler.exp = 70
handler.register = true

export default handler
