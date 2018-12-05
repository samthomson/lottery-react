import web3 from './web3'
const envVars = require('./env')

const address = envVars.address

const abi = envVars.ABI

export default new web3.eth.Contract(abi, address)