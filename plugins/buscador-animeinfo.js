import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}πππΎπππ½πΌ ππ ππππ½ππ πΏπ ππ πΌππππ\nπππππ πππ ππΌππ ππ πΌπ πΌππππ`
let res = await fetch(global.API('https://api.jikan.moe/v4/', '/v3/search/anime', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = 
`ππππππ | πππππ 
β£ ${title}
βββββββββββββββββ
ππππππΏπππ | ππππππΏππ
β£ ${episodes}
βββββββββββββββββ
πππΌπππππππΏπ πππ | πππΌππππππππΏ π½π
β£ ${type}
βββββββββββββββββ
πΎππΌπππππΎπΌπΎπππ | ππΌππππ
β£ ${rated}
βββββββββββββββββ
πππππΌππ | ππΎπππ
β£ ${score}
βββββββββββββββββ
πππππ½πππ | ππππ½πππ
β£ ${members}
βββββββββββββββββ
ππππππππ πππππππ
β£ ${synopsis}
βββββββββββββββββ
ππππΌπΎπ | πππ
β£ ${url}`
await conn.sendFile(m.chat, image_url, '', animeingfo, m) 
let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['πππ£πͺ π½πͺπ¨π¦πͺππππ¨ | ππππ§ππππ¨ π', '#buscarmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)  
  
}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(animeinfo)$/i
handler.exp = 50
handler.level = 4 
export default handler
