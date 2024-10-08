//By:  Tᴀɪʀᴀ Mᴀᴋɪɴᴏ
//https://wa.me/254799097390
//https://github.com/anonphoenix007
//https://t.me/Taira_makino
//https://whatsapp.com/channel/
//https://chat.whatsapp.com/

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'index.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting MAKINO-MD-V2...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
