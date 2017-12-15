pragma solidity ^0.4.15;

contract DemoChildContract {

    uint data;
    uint val; 

    event ChildDataUpdated(string _msg, address indexed _addr, uint indexed _data);

    function setChildData(uint _data) public {
      data = _data; 

      ChildDataUpdated('Child data updated...', msg.sender, data);
    }

    function getChildData() public constant returns(uint) {
      return data;
    }

    function addChildValue(uint _value) public {
      val += _value; 
    }

    function getChildValue() public constant returns(uint) {
      return val;  
    }
}