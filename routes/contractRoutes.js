const bignumber = require('bignumber.js'); 
const contractHelper = require('./contractHelper');

function _doSomethingWithContractInstance(instance, defaultAccount) {

  let promise = new Promise(function(resolve, reject) {

    // starting using our custom Solidity contract... 
    instance.setData(10, {from: defaultAccount})
    .then(() => {
      return instance.getData();
    })
    .then(data => {
      console.log("#1 - data=", bignumber(data).toString());

      instance.addValue(25, {from: defaultAccount}); 
    }) 
    .then(() => {
      return instance.getValue();
    })
    .then(value => {
      console.log("#2 - value=", bignumber(value).toString()); 

      instance.addValue(15, {from: defaultAccount}); 
    }) 
    .then(() => {
      return instance.getValue();
    })
    .then(value => {
      console.log("#3 - value=", bignumber(value).toString()); 
      resolve();  
    })        
    .catch((err) => {
      console.log(err); 
    });

  });  

  return promise; 
} 

module.exports = async function(app) {

  let {contractInstance, defaultAccount} = await contractHelper.initAbstractions(); 

  app.get('/demo', function(req, res) {

    _doSomethingWithContractInstance(contractInstance, defaultAccount)
    .then(() => {
      console.log("Done...200 OK"); 
      res.write("Demoing - check web server console output for more details..."); 
      res.status(200).end();
    }); 

  });

}