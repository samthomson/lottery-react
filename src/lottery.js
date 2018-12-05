import web3 from './web3'
import envVars from './env'

const address = envVars.address
const abi = envVars.ABI

export default new web3.eth.Contract(abi, address)