const Ipfs = require('ipfs')

const ipfs = new Ipfs()

ipfs.on('ready', () => {
  console.log('ready')
})
