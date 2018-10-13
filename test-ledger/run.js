const TransportNodeHid = require( "@ledgerhq/hw-transport-node-hid").default;
const Eth = require( "@ledgerhq/hw-app-eth").default;

const transport = async ()=>{
    console.log("start..")
    const transport = await TransportNodeHid.create();
    console.log("ETH..")
    return new Eth(transport);
}


const getAddress = async()=>{
    const eth = await transport();
    console.log("getAddress")
    const result = await eth.getAddress("44'/0'/0'/0/0");
    console.log(result)
}


const signTx = async () =>{
    const eth = await transport();
    // console.log("signTx")
    const path = "44'/60'/0'"
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
  

    const signedTx = await eth.signTransaction(path, hex)
}



(async ()=>{
    try{

        // await getAddress()

        await signTx()
    }catch(err){
        console.log(err);
    }

})()


//
//
// 1) unlock calls SignMessage
// 2) 
// 3) Unlock and lock require confirmation, Trade doesn't
//
//
//