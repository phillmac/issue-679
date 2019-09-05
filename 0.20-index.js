const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')
const Identities = require('orbit-db-identity-provider')

const ipfs = new IPFS({
  repo: 'ipfs',
  EXPERIMENTAL: {
    pubsub: true
  }
})

ipfs.on('ready', async() => {
  const messagesDbConfig = {
    type: 'feed',
    create: true
  };

  const identity = await Identities.createIdentity({ id: "A"})
  const orbitDbInstance = new OrbitDB(ipfs, identity)
  messagesDb = await orbitDbInstance.open('messages', messagesDbConfig)
  console.log(messagesDb.id)
  await messagesDb.load()
  await messagesDb.add("X")
  console.log(Object.keys(messagesDb.index).length + " entries in log")
  process.exit()
})
