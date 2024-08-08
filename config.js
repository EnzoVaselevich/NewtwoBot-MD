import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone'

global.owner = [ //OWNERS
["5491168758497", 'EnzitoOfc', true]]

global.botNumberCode = ''
global.confirmCode = ''

global.suittag = ['5491168758497']
global.mods = []
global.prems = []


global.isdev = [['5491168758497'],
['5491168758497'],
['5491168758497']]


global.packname = '𝑵𝒆𝒘𝒕𝒘𝒐𝑩𝒐𝒕-𝑴𝑫'
global.author = '𝙽𝚎𝚠𝚝𝚠𝚘𝙱𝚘𝚝'
global.wm = '𝙉𝙚𝙬𝙩𝙬𝙤𝘽𝙤𝙩-𝙈𝘿 │ ᵐᵘˡᵗⁱᵇᵒᵗ-ᵒᶠᶜ'
global.wm2 = 'NW│ᵇᵒᵗ'
global.naufrago = '【ＮｅｗｔｗｏＢｏｔ－ＭＤ】│ᴄᴀɴᴀʟ • ʸᵗ'
global.cb = '🅽︎🆉︎︎'

global.vs = '1.8.0'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '✯ Naufrago ✯'
global.devnum = '+54 9 3873 23-2212'

global.imgAll = fs.readFileSync('./Menu1.jpg')
global.naufraAll = 'https://chat.whatsapp.com/GM7KnXU35gZKBA3MjbAUtH'
global.nzLink = 'https://chat.whatsapp.com/GM7KnXU35gZKBA3MjbAUtH'
global.nzMenus = fs.readFileSync('./Menu2.jpg')
global.naufraImg = 'https://telegra.ph/file/479af74a9f4bcfc095f19.jpg'
	
//Imagenes
global.imagen1 = 'https://telegra.ph/file/479af74a9f4bcfc095f19.jpg'
global.imagen2 = fs.readFileSync('./Menu2.jpg')
global.imagen3 = fs.readFileSync('./Menu3.jpg')
global.imagen4 = fs.readFileSync('./imagenes/naufra1.jpg')
global.imagen5 = fs.readFileSync('./imagenes/naufra2.jpg')
global.imagen6 = fs.readFileSync('./imagenes/naufra3.jpg')
global.imagen7 = fs.readFileSync('./imagenes/naufra4.jpg')
global.imagen8 = fs.readFileSync('./imagenes/naufra5.jpg')
global.imagen9 = fs.readFileSync('./imagenes/naufra6.jpg')
global.imagen10 = fs.readFileSync('./imagenes/naufra7.jpg')
global.imagen11 = fs.readFileSync('./imagenes/naufra8.jpg')
global.imagen12 = fs.readFileSync('./imagenes/naufra9.jpg')
global.imagen13 = fs.readFileSync('./imagenes/naufra10.jpg')
global.imagen14 = fs.readFileSync('./imagenes/naufra11.jpg')
global.imagen15 = fs.readFileSync('./imagenes/naufra12.jpg')
global.imagen16 = fs.readFileSync('./imagenes/naufra13.jpg')

global.nzImg1 = fs.readFileSync('./Menu1.jpg')
global.nzImg2 = fs.readFileSync('./Menu2.jpg')

global.nz1 = 'https://telegra.ph/file/f42defd8e0a0c6c002c2b.jpg'
global.nz2 = 'https://telegra.ph/file/ccded0c9af161205a9b6a.jpg'
global.nz3 = 'https://telegra.ph/file/608aa9b88a3f583d1518a.jpg'
global.nz4 = 'https://telegra.ph/file/8a577d03cf6f4a08faa19.jpg'
global.nz5 = 'https://telegra.ph/file/d5876e39c596cc5e5dd57.jpg'
global.nz6 = 'https://telegra.ph/file/7a410e289b4aef7b3ef55.jpg'

global.img = 'https://i.postimg.cc/Y9t2mzvt/Menu2.jpg'
global.img1 = 'https://i.postimg.cc/T386DJsB/Menu3.jpg'
global.img2 = 'https://i.postimg.cc/T386DJsB/Menu3.jpg'
global.img3 = 'https://i.postimg.cc/43sR8Ns5/Menu4.jpg'
global.img4 = 'https://telegra.ph/file/0d1bb600d2d2825985b28.jpg'
global.img5 = 'https://telegra.ph/file/71eded9ff7d42eb241396.jpg'
global.img6 = 'https://telegra.ph/file/a6a743a556c1b1d5aa7b0.jpg'
global.img7 = 'https://telegra.ph/file/a0b6ccc430f6af87a6005.jpg'
global.img8 = 'https://telegra.ph/file/dbad5ac712a496d3ea3dd.jpg'
global.img9 = 'https://telegra.ph/file/b22c506a1c934e4f1414b.jpg'
global.img10 = 'https://telegra.ph/file/0cce1fb7a9cf817261fa4.jpg'

global.iimg1 = 'https://telegra.ph/file/b39d19db00f91a9633be6.jpg'
global.iimg2 = 'https://telegra.ph/file/feaa2f95715e49a71275a.jpg'
global.iimg3 = 'https://telegra.ph/file/feaa2f95715e49a71275a.jpg'
global.iimg4 = 'https://telegra.ph/file/feaa2f95715e49a71275a.jpg'
global.iimg5 = 'https://telegra.ph/file/feaa2f95715e49a71275a.jpg'

global.yt = 'no tengo'
global.ig = 'no tengo'
global.md = 'https://github.com/Jesusoo000/NewtwoBot-MD'
global.paypal = ''
global.git = 'https://github.com/Jesusoo000/NewtwoBot-MD'
global.linkwabot = 'https://wa.me/5491165601378?text=.menu'
global.email = ''
global.grupo1 = 'https://chat.whatsapp.com/GM7KnXU35gZKBA3MjbAUtH'
global.grupo2 = 'https://chat.whatsapp.com/GM7KnXU35gZKBA3MjbAUtH'
global.canal = ' https://whatsapp.com/channel/0029VajIId22phHQLslZah1n'
global.paypal2 = ''
global.creador = 'https://wa.me/5491168758497'
global.asistencia = 'https://wa.me/5491168758497?text=Hola'

global.nzVideos = ['https://qu.ax/ygwT.mp4', 'https://qu.ax/iFCi.mp4', 'https://qu.ax/jie.mp4', 'https://qu.ax/Pbha.mp4', 'https://qu.ax/bdvm.mp4']
global.nzAll = ['https://qu.ax/ygwT.mp4', 'https://qu.ax/iFCi.mp4', 'https://qu.ax/jie.mp4', 'https://qu.ax/Pbha.mp4', 'https://qu.ax/bdvm.mp4', iimg1, iimg2, iimg3, iimg4, iimg5]

/*
global.raiz = './'
global.aniD = 'sessions/'
global.dirP = raiz
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.raiz = './Menu1.jpg'
*/

global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

//Cargando
global.wait = '*5*'
global.waitt = '*20%*'
global.waittt = '*80%*'
global.waitttt = '*99%*'
global.waittttt = '*100%*'

global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
global.wm2 = `${dia} ${fecha}\nNaufraZapp-MD`;
global.gt = 'NaufraZapp-MD';
global.mysticbot = 'NaufraBot';
global.mysticbot = 'https://github.com/MultiBot-OFC/NaufraZapp-MD';
global.nomorown = '51929838430';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu1.jpg')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];

//fake
global.fsizedoc = '999999'
global.fpagedoc = '9999'

//Rpg
global.multiplier = 200 // Cuanto más alto, más difícil subir de nivel

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '🏆', limit: '💎', exp: '✨',
health: '❤️',
money: '💵',
potion: '🥤',
pickaxe: '⛏️' 
}

let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
