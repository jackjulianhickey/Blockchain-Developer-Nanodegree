var Web3 = require("web3")
var web3 = new Web3('Http://127.0.0.1:7545')

web3.eth.getTransactionCount("0x0339b012285264d6e6685845C0936d9674b29F4e").then(console.log)
