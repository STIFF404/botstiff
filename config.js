
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6283879685072']
global.ownernomer = "6283879685072"
global.premium = ['6283879685072', '6288296172396', '6289518117052']
global.packname = ''
global.author = 'Stiff No Counter'
global.websitex = 'https://tiktok.com/@omstiff404'
global.komten = 'https://vt.tiktok.com/ZSR7abPfE/'
global.reactemoji = '🗿'
global.sessionName = 'session'
global.jumlha = '404'
global.jumhal = '100000000000000'
global.jumlah = '404000000000000'
global.prefa = ['!','.','#','&']
global.sp = '#'
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner gua🤪',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu ya Jangan Buru-Buru',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 200
}
global.thumb = fs.readFileSync('./lib/1.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
