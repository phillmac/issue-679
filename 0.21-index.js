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
  };

  const identity = await Identities.createIdentity({ id: "A"})
  const orbitDbInstance = await OrbitDB.createInstance(ipfs, { identity })
  messagesDb = await orbitDbInstance.open('/orbitdb/zdpuAxBZ32b5b5k848aaZGrCNZCjmPTaZtaG6VDS65RPFHyz8/messages', messagesDbConfig)
  await messagesDb.load()
  await messagesDb.add("X")
  console.log(Object.keys(messagesDb.index).length + " entries in log")
  process.exit()
})
