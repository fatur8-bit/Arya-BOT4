let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [0859140514162]
│ • Dana [082134037319]
│ • Gopay [0859140514162]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62859140514162
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa axis"
3.)Dan terus masukkan nomor kami 0859140514162
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
