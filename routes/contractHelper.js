const contract = require('truffle-contract');
const Web3 = require('web3'); 

function initAbstractions() {
  
  const myArtifacts = require('../build/contracts/DemoContract.json');
  
  const web3 = new Web3('http://localhost:8545'); 
  const DemoContract = contract(myArtifacts);
  DemoContract.setProvider(web3.currentProvider); 

  DemoContract.currentProvider.sendAsync = function () {
    return DemoContract.currentProvider.send.apply(DemoContract.currentProvider, arguments);
  };

  let promise = new Promise(function(resolve, reject) {

    let defaultAccount;  

    web3.eth.getAccounts()
    .then(accounts => {
      defaultAccount  = accounts[0]; 
      web3.eth.defaultAccount = defaultAccount; 
    })
    .then(() => {
      DemoContract.deployed()
      .then(contractInstance => {
        resolve({contractInstance, defaultAccount}); 
      })
      .catch((err) => {
        console.log(err); 
      }); 
    })
    .catch((err) => {
      console.log(err)
    }); 

  }); 

  return promise; 
}

module.exports = {
  initAbstractions: initAbstractions  
}