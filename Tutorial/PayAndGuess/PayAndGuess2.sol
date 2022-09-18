//by Christopher Chang, Alexander Kurz
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract PayAndGuess2 {
    address payable [] public payers; 
    mapping(address => uint) public paid;
    // uint public luckyIndex; // for testing only, otherwise local to disburse()

    function doPay() public payable {
        payers.push(payable(msg.sender));
        paid[msg.sender] = msg.value;
    }

    function disburse() public {
        require(payers.length > 0, "No payments to disburse.");
        uint luckyIndex = random() % payers.length;
        address payable winner = payers[luckyIndex];

        // sum all paid
        uint sumPaid = 0;
        for (uint i = 0; i < payers.length; i++) {
            sumPaid += paid[payers[i]];
        }   

        // transfer the money to the payer
        winner.transfer(sumPaid);

        // reset info on payer to default
        delete payers;
        //delete paid;
        for (uint i = 0; i < payers.length; i++) {
            delete paid[payers[i]];
        }
    }

    // This function is NOT SECURE. A miner can keep mining blocks and not publish until they get the block they want.
    // https://betterprogramming.pub/how-to-generate-truly-random-numbers-in-solidity-and-blockchain-9ced6472dbdf
    function random() private view returns(uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, payers)));
    }

}