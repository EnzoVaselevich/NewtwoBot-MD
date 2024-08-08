let imagebot= imagen1
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `•═══• ❮🌎 \`BIENVENIDO/A\` 🌎❯ •═══•

☛ NewtwoBot-MD fue creɑdo para los siguientes propositos:

*facilitar y mejorar el manejo de tus grupos de WhatsApp* y *brindarte muchas herramientas de entretenimiento para tus grupos y etc, puedes ver el menu completo tocando el botón que dice menu completo en este mensaje.*  

💥 Recuerda que este bot está en desarrollo y puede no andar correctamente y no estar 24/7 activo 💥

> Espero les guste este gran bot.

Antes de comenzar a utilizar el bot, no se olvide de *verificarse o registrarse* para usar todos los comandos sin ninguna restricción, toque el botón auto verificar para registrarte👇
`
await conn.sendButton(m.chat, menu, wm, imagebot, [
['ᴍᴇɴᴜ ᴄᴏᴍᴘʟᴇᴛᴏ 💫', '.menucompleto'],
['ᴀᴜᴛᴏ ᴠᴇʀɪғɪᴄᴀʀ ✨', '#reg Newtwo.20']], null, [
['ɢʀᴜᴘᴏ ᴏғɪᴄɪᴀʟ 🌠', `${canal}`]], null, null, fkontak)}
handler.command = /^menu|help|comandos|memu|menú|memú$/i
handler.register = false
export default handler
