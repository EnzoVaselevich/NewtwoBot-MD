let handler = async (m, { usedPrefix }) => {
try {
delete global.chatgpt.data.users[m.sender]  
m.reply(`『✅』𝙃𝙞𝙨𝙩𝙤𝙧𝙞𝙖𝙡 𝙙𝙚 𝙘𝙤𝙣𝙫𝙚𝙧𝙨𝙖𝙨𝙞𝙤𝙣 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙖 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!`)    
} catch (error1) {   
console.log(error1)
throw `『❌』𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙖𝙡 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙡𝙖 𝙨𝙚𝙨𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙖𝙩𝙂𝙋𝙏, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`   
}} 
handler.command = ['delchatgpt']
export default handler
