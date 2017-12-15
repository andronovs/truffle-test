pragma solidity ^0.4.15;

import "./DemoChildContract.sol";

contract DemoContract {

    event DataUpdated(string _msg, address indexed _addr, uint indexed _data);
    DemoChildContract child; 

    function DemoContract(address _demoChildContractAddress) public {
      require(_demoChildContractAddress != address(0));

      child = new DemoChildContract(); 
    }

    /*function DemoContract() public {
      child = new DemoChildContract(); 
    }*/

    function setData(uint _data) public {

      child.setChildData(_data); 

      DataUpdated('Data updated...', msg.sender, _data);
    }

    function getData() public constant returns(uint) {
      return child.getChildData();
    }

    function addValue(uint _value) public {
      child.addChildValue(_value); 
    }

    function getValue() public constant returns(uint) {
      return child.getChildValue();  
    }
}
