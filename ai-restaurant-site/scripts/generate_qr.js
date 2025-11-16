const QRCode = require('qrcode')
const fs = require('fs')
;(async ()=>{
  const outDir = './qrcodes'
  if(!fs.existsSync(outDir)) fs.mkdirSync(outDir)
  for(let i=1;i<=20;i++){
    const url = `http://localhost:3000/guest?table=${i}`
    const out = `${outDir}/table-${i}.png`
    await QRCode.toFile(out, url, { width:400 })
    console.log('Wrote', out)
  }
})()
