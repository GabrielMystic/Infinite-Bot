import axios from 'axios'
import hx from 'hxz-api' 

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}πππππππ ππ ππππ½ππ πΏπ ππππΌπππ πΏπ πππππΌπππΌπ ππΌππΌ πΏπππΎπΌπππΌπ ππΌπ ππππππππΌπ\nπππππππ\n*${usedPrefix + command} gabrielacosta_15*\n\nπππππ πππππΌπππΌπ ππππππΌππ ππ πΏππππππΌπΏ πππππππ\nπππΌππππ\n*${usedPrefix + command} gabrielacosta_15*`

hx.igstory(text).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {            
conn.sendFile(m.chat, i.url, 'igstory.mp4', wm, m)
} else {     
conn.sendFile(m.chat, i.url, '', '', m)
}}});
  
let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['πππ£πͺ πΏππ¨πππ§πππ¨ π', '#descargasmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)  
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria', 'ighistorias' ]
handler.limit = 3
handler.exp = 87
export default handler
