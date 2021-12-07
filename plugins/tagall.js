let handler = async (m, { conn, text, participants }) => {
    let users = participants.map(u => u.jid)
    m.reply(text + '\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
      contextInfo: { mentionedJid: users }
    })
  }
  handler.command = ['/^tagall$/i']
  handler.help = ['tagall']
  handler.admin = true
  handler.group = true
  handler.tags = ['group']
  module.exports = handler