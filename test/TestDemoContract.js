var DemoContract = artifacts.require("./DemoContract.sol");

contract("DemoContract", function(accounts) {

  it("should have 10 accounts", function() {
    assert.equal(accounts.length, 10);
  }); 

  it("should have no data and no value", function() {
    var contract;
    return DemoContract.deployed().then(function(instance) {
      contract = instance;
      return contract.getData.call();
    }).then(function(data) {
      assert.equal(0, data);
    }).then(function() {
      return contract.getValue.call();
    }).then(function(value) {
      assert.equal(0, value);
    });
  });

  it("should validate data", function() {
    var contract;
    var newData = 15; 
    return DemoContract.deployed().then(function(instance) {
      contract = instance;
      return contract.setData(newData);
    }).then(function() {
      return contract.getData.call();
    }).then(function(data) {
      assert.equal(newData, data.toNumber());
    });
  });

  it("should validate value", function() {
    var contract;
    var newValue1 = 20; 
    var newValue2 = 10; 
    return DemoContract.deployed().then(function(instance) {
      contract = instance;
      return contract.getValue.call();
    }).then(function(value) {
      assert.equal(0, value);
      return contract.addValue(newValue1);
    }).then(function() {
      return contract.getValue.call();
    }).then(function(value) {
      assert.equal(newValue1, value);
      return contract.addValue(newValue2);
    }).then(function() {
      return contract.getValue.call();
    }).then(function(value) {
      assert.equal(newValue1 + newValue2, value);
    }); 
  }); 

});
