'use strict';

const DemoChildContract = artifacts.require('./DemoChildContract.sol');

// http://chaijs.com/api/assert/

contract('DemoChildContract', function(accounts) {
    let instance;

    it("should have 10 accounts", function() {
        assert.equal(accounts.length, 10); 
    }); 

    beforeEach(async function() {
        instance = await DemoChildContract.new();
    });

    it('should have no data and no value', async function() {
        const data = await instance.getChildData();
        const value = await instance.getChildValue(); 

        assert.equal(data, 0);
        assert.equal(value, 0); 
    });
    
    describe('setChildData', function() {
        it('should validate data', async function() {
            const newData = 15; 
            await instance.setChildData(newData);
            const data = await instance.getChildData();  

            assert.equal(newData, data); 
        });
    });
    
    describe('addChildValue', function() {
        it('should validate value', async function() {
            const newValue1 = 20; 
            const newValue2 = 10; 

            let value = await instance.getChildValue(); 
            assert.equal(value, 0);

            await instance.addChildValue(newValue1);
            value = await instance.getChildValue();      
            assert.equal(value, newValue1);

            await instance.addChildValue(newValue2);
            value = await instance.getChildValue();      
            assert.equal(value, newValue1 + newValue2);
        });
    });

});
