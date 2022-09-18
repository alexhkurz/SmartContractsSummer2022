// by Christopher Chang, Alexander Kurz
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract PayAndGuess4 {
    address payable[] public players;
    mapping(address => uint) public paid;
    mapping(address => uint) public guesses;
    // uint public luckyNumber; // for testing, otherwise private in disburse
    // address payable public winner; // for testing, otherwise private in disburse
    // uint public winAmount; // for testing, otherwise private in disburse

    function doPlayAndGuess(uint guess) public payable {
        require(!hasPlayed(payable(msg.sender)), "This address has already played.");
        require(msg.value > 0, "The paid amount must be positive.");
        require(1 <= guess && guess <= 10, "The guess must be within 1 and 10, inclusive.");

        players.push(payable(msg.sender));
        paid[msg.sender] = msg.value;
        guesses[msg.sender] = guess;
    }

    function disburse() public {
        require(players.length > 0, "No one has played.");

        uint luckyNumber = random() % 10 + 1;

        // Find winner (by finding closest guess)
        address payable winner;
        uint closestGuessDistance = 10000; // Some very high initial value
        for (uint i = 0; i < players.length; i++) {
            address payable player = players[i];
            uint guess = guesses[player];
            uint guessDistance = luckyNumber > guess ? luckyNumber - guess : guess - luckyNumber;

            if (guessDistance < closestGuessDistance) {
                closestGuessDistance = guessDistance;
                winner = player;
            }
        }

        // sum all paid
        uint sumPaid = 0;
        for (uint i = 0; i < players.length; i++) {
            sumPaid += paid[players[i]];
        }   

        // pay the min of sumPaid and the amount of money in the contract (should be the same)
        uint balance = address(this).balance; 
        uint winAmount = min(balance, sumPaid);

        // transfer the money to the payer
        winner.transfer(winAmount);

        // Delete stored info on players
        for (uint i = 0; i < players.length; i++) {
            address payable player = players[i];
            delete paid[player];
            delete guesses[player];
        }
        delete players;
    }

    function min(uint x, uint y) private pure returns(uint) {
        return x < y ? x : y;
    }

    // This function is NOT SECURE. A miner can keep mining blocks and not publish until they get the block they want.
    // https://betterprogramming.pub/how-to-generate-truly-random-numbers-in-solidity-and-blockchain-9ced6472dbdf
    function random() private view returns(uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    // Apparently, this will increase gas costs as the number of betters increases
    function hasPlayed(address payable addr) private view returns(bool) {
        for (uint i = 0; i < players.length; i++) {
            if (players[i] == addr) {
                return true;
            }
        }
        return false;
    }

}