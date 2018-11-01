const TransportNodeHid = require( "@ledgerhq/hw-transport-node-hid").default;
const Eth = require( "../../ledgerjs/packages/hw-app-eth/lib/Eth").default;

const transport = async ()=>{
    console.log("start..")
    const transport = await TransportNodeHid.create();
    console.log("started transport..")
    return new Eth(transport);
}


const getAddress = async()=>{
    const eth = await transport();
    console.log("getAddress")
    const result = await eth.getAddress("44'/0'/0'/0/0");
    console.log(result)
}

const signMsg = async () =>{
      const eth = await transport();
    console.log("signTx")
    const path = "44'/60'/0'"
    const msg = "abcd"
    let signedTx = await eth.signPersonalMessage(path, msg)
     signedTx = await eth.signPersonalMessage(path, msg)
     signedTx = await eth.signPersonalMessage(path, msg)
    console.log(signedTx);
}


const signTx = async () =>{
    const eth = await transport();
    console.log("signTx")
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
  

    const hex = "f8700884d8111c4083010cba94aa7427d8f17d87a28f5e1ba3adbb270badbe10118737a49572ab5700b844e2bbb1580000000000000000000000000000000000000000000000000037a49572ab57000000000000000000000000000000000000000000000000000000000000000001018080"
    const signedTx = await eth.signTransaction(path, hex)
    console.log(signedTx);
}

const showConfirmation = async () =>{
    const eth = await transport();
  console.log('eth.willShowConfirmation');
  const hex = "f8700884d8111c4083010cba94aa7427d8f17d87a28f5e1ba3adbb270badbe10118737a49572ab5700b844e2bbb1580000000000000000000000000000000000000000000000000037a49572ab57000000000000000000000000000000000000000000000000000000000000000001018080"
  const showConfirmation = await eth.willShowConfirmation()
  console.log('showConfirmation...');
  console.log(showConfirmation);
}


const resetRequestCount = async () =>{
    const eth = await transport();
  console.log('eth.resetRequestCount');
  const resetRequestCount = await eth.resetRequestCount()
  console.log('resetRequestCount...');
  console.log(resetRequestCount);
}



(async ()=>{
  console.log("Running ....");
    try{
      // await getAddress()
      // await showConfirmation()
      // await resetRequestCount()
      // await signTx()
      await signMsg()
    }catch(err){
        console.log(err);
    }

})()

