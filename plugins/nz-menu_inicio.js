let imagebot = './Menu1.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `•═══• ❮🌎 \`BIENVENIDO/A\` 🌎❯ •═══•

- *_Para ver el menu completo, presione el boton de_*
• \`Ir al menu\``
await conn.sendButton(m.chat, str, wm, imagebot, [
['IR AL MENU 🪐', '.esubbot'],
['GRUPOS 🔜', '#esubbot --code']], null, null, fkontak)}
handler.command = /^menu|help|comandos|memu|menú|memú$/i
handler.register = true
export default handler
