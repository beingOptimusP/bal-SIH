// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract Bal is Ownable{

    constructor(){}

    struct Data{
        uint truckId;
        uint timeIn;        
        uint timeOut;
        uint weight;        
    }

    mapping(uint => Data) data;
    uint public index;

    event logs(uint indexed truckId ,uint timeIn ,uint timeOut ,uint indexed weight);

    function add(uint _truckId, uint _timeIn, uint _weight) onlyOwner public{
        data[index] = Data(_truckId,_timeIn,0,_weight);
    } 

    function del(uint _index, uint _timeOut) onlyOwner public{
        emit logs
        (data[_index].truckId, data[index].timeIn, _timeOut, data[index].weight);
        delete data[index];
    }
}
