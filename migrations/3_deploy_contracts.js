var DemoChildContract = artifacts.require("./DemoChildContract.sol");
var DemoContract = artifacts.require("./DemoContract.sol");

module.exports = function(deployer) {
    deployer.deploy(DemoChildContract)
	    .then(function() {
	        return deployer.deploy(DemoContract, DemoChildContract.address) 
	        .then(function() {
	        	return DemoContract.deployed()
	        	.then(function (instance) {
	            	console.log("instance of DemoContract is deployed at:", instance.address);
	        	})
	        })
	        .catch(function(e) {
	        	console.log(e);
	        });
	    })
	    .catch(function(e) {
	        console.error(e);
	    });
};

/*
module.exports = function(deployer) {
    deployer.deploy(DemoChildContract)
	    .then(function() {
	        return deployer.deploy(DemoContract)
	        .then(function() {
	        	return DemoContract.deployed()
	        	.then(function (instance) {
	            	console.log("instance of DemoContract is deployed at:", instance.address);
	        	})
	        })
	        .catch(function(e) {
	        	console.log(e);
	        });
	    })
	    .catch(function(e) {
	        console.error(e);
	    });
};
*/ 