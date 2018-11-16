const TransportNodeHid = require('@ledgerhq/hw-transport-node-hid').default
const Eth = require('../../ledgerjs/packages/hw-app-eth/lib/Eth').default
const EthereumTx = require('ethereumjs-tx')
const Web3 = require('web3')
var Bn = require("bignumber.js");


const transport = async () => {
  console.log('start..')
  const transport = await TransportNodeHid.create()
  console.log('started transport..')
  return new Eth(transport)
}

const getAddress = async () => {
  const eth = await transport()
  console.log('getAddress')
  const result = await eth.getAddress("44'/0'/0'/0/0")
  console.log(result)
}

const signMsg = async () => {
  const eth = await transport()
  console.log('signMsg')
  const path = "44'/60'/0'"
  const msg = 'abcd'
  const meta = ['ETH/USD', '375.12', '32323']
  let signedTx = await eth.signPersonalMessage(path, msg, meta)
  // signedTx = await eth.signPersonalMessage(path, msg)
  // signedTx = await eth.signPersonalMessage(path, msg)
  console.log(signedTx)
}

const signTx = async () => {
  const eth = await transport()
  console.log('signTx')
  const path = "44'/60'/0'/0"
  const txParams = {
    nonce: '0x00',
    gasPrice: '0x09184e72a000',
    gasLimit: '0x2710',
    to: '0x0000000000000000000000000000000000000000',
    value: '0x00',
    data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
    // EIP 155 chainId - mainnet: 1, ropsten: 3
    chainId: 1
  }
  const tx = new EthereumTx(txParams)
  // let hex = tx.serialize().toString("hex")
  // console.log(hex);
  // // regular tx
  // // const hex = "e8018504e3b292008252089428ee52a8f3d6e5d15f8b131996950d7f296c7952872bd72a2487400080"
  // // contract call
  // const account = await eth.getAddress(path);
  // console.log(`LEDGER account ${account.address}`)

  // const encodedAbi = '0xe2bbb1580000000000000000000000000000000000000000000000000037a49572ab57000000000000000000000000000000000000000000000000000000000000000001'
  // console.log(`LEDGER encodedAbi ${encodedAbi}`)

  // const rawTx =  d

  // console.log('LEDGER rawTx', rawTx)

  // const tx = new Tx(rawTx)
  // console.log('LEDGER tx', tx)

  const hex = 'f8700984e6f7cec083010cba94aa7427d8f17d87a28f5e1ba3adbb270badbe10118736e59703443700b844e2bbb1580000000000000000000000000000000000000000000000000036e597034437000000000000000000000000000000000000000000000000000000000000000030018080'
  signedTx = await eth.signTransaction(path, hex)

  console.log(signedTx)
}

const showConfirmation = async () => {
  const eth = await transport()
  console.log('eth.willShowConfirmation')
  const hex = 'f8700884d8111c4083010cba94aa7427d8f17d87a28f5e1ba3adbb270badbe10118737a49572ab5700b844e2bbb1580000000000000000000000000000000000000000000000000037a49572ab57000000000000000000000000000000000000000000000000000000000000000001018080'
  const showConfirmation = await eth.willShowConfirmation()
  console.log('showConfirmation...')
  console.log(showConfirmation)
}

const resetRequestCount = async () => {
  const eth = await transport()
  console.log('eth.resetRequestCount')
  const resetRequestCount = await eth.resetRequestCount()
  console.log('resetRequestCount...')
  console.log(resetRequestCount)
}

const setRequestConfirmation = async () => {
  const eth = await transport()
  console.log('eth.setRequestConfirmation')
  const setRequestConfirmation = await eth.setRequestConfirmation(0)
  console.log('setRequestConfirmation...')
  console.log(setRequestConfirmation)
}

const erc20tx = async () => {
  console.log('eth.erc20tx')
  const eth = await transport()
  const path = "44'/60'/0'/0"

const abi= [{"constant":true,"inputs":[],"name":"batFundDeposit","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"batFund","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenExchangeRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"refund","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenCreationCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isFinalized","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingEndBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ethFundDeposit","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"createTokens","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"tokenCreationMin","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingStartBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_ethFundDeposit","type":"address"},{"name":"_batFundDeposit","type":"address"},{"name":"_fundingStartBlock","type":"uint256"},{"name":"_fundingEndBlock","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"LogRefund","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"CreateBAT","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]

  const web3 = new Web3()
  web3.setProvider(new web3.providers.HttpProvider('http://192.168.255.6'))
  var count = 0
  var abiArray = abi
  var contractAddress = '0x0d8775f648430679a709e98d2b0cb6250d2887ef'
  var Contract = new web3.eth.Contract(abiArray)
  let from = '0xc4e8096d9cea5b16fe36ea70e7baa6b4426e2597'
  let rawTransaction = {
    value: '0x0',
    from: from,
    to: contractAddress,
    data: Contract.methods.transfer(from,web3.utils.toHex("4")).encodeABI()
  }
  var tx = new EthereumTx(rawTransaction)
  let hex = tx.serialize().toString('hex')
  signedTx = await eth.signTransaction(path, hex)
  console.log(signedTx)

}
(async () => {
  console.log('Running ....')
  try {
    // await erc20tx()
    // await getAddress()
    // await showConfirmation()
    // await resetRequestCount()
    // await signTx()
    await signMsg()
    // await setRequestConfirmation()
    // await signMsg()
    // await signMsg()
    // console.log("SIGN");
    // await signMsg()
    // await signMsg()
    // console.log("END");
  } catch (err) {
    console.log(err)
  }
})()

new Buffer([0x0D, 0x87, 0x75, 0xF6, 0x48, 0x43, 0x06, 0x79, 0xA7, 0x09, 0xE9, 0x8d, 0x2b, 0x0C, 0xb6, 0x25, 0x0d, 0x28, 0x87, 0xEF])
