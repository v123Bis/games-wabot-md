let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083183321692]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [083183326192]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
