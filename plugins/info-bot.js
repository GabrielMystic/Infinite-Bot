import fs from "fs"
let handler = m => m

handler.all = async function (m) {
let vn = './media/que mirรกs bobo.mp3'
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Lightning Bot ', orderTitle: 'Bang', thumbnail: fs.readFileSync('./media/menus/Menu3.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}}  

if (/^bot$/i.test(m.text)) {
    
conn.sendButton(m.chat, `ยก๐ฌ๐! ๐จ๐๐รญ ๐๐๐๐๐. ๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐ 
๐ฏ๐๐! ๐ฐ'๐ ๐๐๐๐. ๐ฐ ๐๐๐ ๐๐๐๐ ๐`, wm, [['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ | ๐ฝ๐๐๐  ๐ฉ๐ค ๐๐๐ฃ๐ช โ๏ธ', `#menu`]], 'conversation', { sendEphemeral: true, quoted: estilo })
conn.sendFile(m.chat, vn, 'que mirรกs bobo.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: estiloaudio })   
}
return !0
}
export default handler
