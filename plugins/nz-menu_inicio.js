let imagebot= imagen1
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `•═══• ❮🌎 \`BIENVENIDO/A\` 🌎❯ •═══•

☛  NewtwoBot-MD fue creɑdo pɑrɑ *fɑcilitɑr el mɑnejo de tus grupos de Whɑtsɑpp* y *brindɑrte errɑmientɑs de entretenimiento pɑrɑ tus grupos.*  

💥ɑnteriormente este bot erɑ *privɑdo* pero devido ɑ que muchos usuɑrios tɑmbién queriɑn instɑlɑrlo por ellos mismos se lɑnzo lɑ versión públicɑ de este mɑrɑvilloso bot, pɑrɑ que todos puedɑn disfrutɑrlo💥

🫂ɢʀᴀᴄɪᴀs ᴀ ᴛᴏᴅᴏs ʟᴏs ᴄᴏʟᴀʙᴏʀᴀᴅᴏʀᴇs ᴘᴏʀ ᴇsᴛᴇ ᴍᴀʀᴀᴠɪʟʟᴏsᴏ ᴘʀᴏʏᴇᴄᴛᴏ🤗

También pueden seguirnos en nuestro canal oficial de WhatsApp para recibir información del bot y también para participar en algunos sorteos💥

Antes de comenzar a utilizar el bot, no se olvide de *verificarse o registrarse* para usar todos los comandos libremente👇
`
await conn.sendButton(m.chat, menu, wm, imagebot, [
['𝑴𝑬𝑵𝑼 𝑪𝑶𝑴𝑷𝑳𝑬𝑻𝑶 💫', '.menucompleto'],
['𝑨𝑼𝑻𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑹 ✨', '#reg Newtwo.20']], null, [
['𝑪𝑨𝑵𝑨𝑳 𝑶𝑭𝑰𝑪𝑰𝑨𝑳 🌠', `${canal}`]], null, null, fkontak)}
handler.command = /^menu|help|comandos|memu|menú|memú$/i
handler.register = false
export default handler
