//by Christopher Chang, Alexander Kurz
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract PayAndGuess1 {
    address payable [] public payers; 
    mapping(address => uint) public paid;

    function doPay() public payable {
        payers.push(payable(msg.sender));
        paid[msg.sender] = msg.value;
    }

    function disburse() public {
        require(payers.length > 0, "No payments to disburse.");
        address payable payee = payers[payers.length - 1];
        payers.pop();

        // transfer the money to the payer
        payee.transfer(paid[payee]);

        // reset info on payer to default
        delete paid[payee];
    }
}