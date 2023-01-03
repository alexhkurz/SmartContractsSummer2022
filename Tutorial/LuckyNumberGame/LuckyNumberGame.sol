pragma solidity ^0.8.3;

// SPDX-License-Identifier: MIT

contract LuckyNumberGame {
    // An array to store the addresses of players who have made a guess
    address[] public players;
    // Mappings to store the amount of money paid by each player and their guess
    mapping(address => uint256) public paid;
    mapping(address => uint256) public guesses;

    // Mapping mapping from player addresses to booleans
    mapping(address => bool) private countedFee;

    function hasCountedFee(address addr) private view returns (bool) {
        return countedFee[addr];
    }

    function markFeeAsCounted(address addr) private {
        countedFee[addr] = true;
    }

    // A function to allow players to make a guess and pay a fee to participate in the game
    function play(uint256 guess) public payable {
        // Check that the player has not already played, that the fee is positive, and that the guess is within the correct range
        require(
            !hasPlayed(payable(msg.sender)),
            "This address has already played."
        );
        require(msg.value > 0, "The paid amount must be positive.");
        require(
            1 <= guess && guess <= 10,
            "The guess must be within 1 and 10, inclusive."
        );

        // Add the player's address to the array, store the amount paid in the mapping, and store the guess in the mapping
        players.push(payable(msg.sender));
        paid[msg.sender] = msg.value;
        guesses[msg.sender] = guess;
    }

    // A function to determine the winner of the game and award them the winnings
    function determineWinner() public {
        // Check that at least one player has made a guess
        require(players.length > 0, "No one has played.");

        // Choose a "lucky number" by calling the private random() function
        uint256 luckyNumber = random();

        // Find the player with the guess that is closest to the lucky number
        address winner;
        uint256 closestGuessDistance = 10000; // Some very high initial value
        for (uint256 i = 0; i < players.length; i++) {
            address player = players[i];
            uint256 guess = guesses[player];
            uint256 guessDistance = luckyNumber > guess
                ? luckyNumber - guess
                : guess - luckyNumber;

            if (guessDistance < closestGuessDistance) {
                closestGuessDistance = guessDistance;
                winner = player;
            }
        }

        // Calculate the total amount of money paid by all players
        uint256 sumPaid = 0;
        for (uint256 i = 0; i < players.length; i++) {
            // Only count the fee paid by each player once, even if they made multiple guesses
            if (!hasCountedFee(players[i])) {
                sumPaid += paid[players[i]];
                markFeeAsCounted(players[i]);
            }
        }

        // Transfer the minimum of the sum of all paid fees and the balance of the contract to the winner
        payable(winner).transfer(min(sumPaid, address(this).balance));

        // Reset the contract state by deleting all stored data
        delete players;
    }

    // A private, pure function to return the minimum of two unsigned integers
    function min(uint256 x, uint256 y) private pure returns (uint256) {
        return x < y ? x : y;
    }

    // A private, view function to return a "random" number
    function random() private view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(block.difficulty, block.timestamp, players)
                )
            );
    }

    // A private, view function to determine whether a player has already played
    function hasPlayed(address player) private view returns (bool) {
        for (uint256 i = 0; i < players.length; i++) {
            if (players[i] == player) {
                return true;
            }
        }
        return false;
    }

    // A function to return the balance of the contract
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // A function to return the number of players who have played
    function getNumberOfPlayers() public view returns (uint256) {
        return players.length;
    }

    // A function to return the address of a player at a given index
    function getPlayer(uint256 index) public view returns (address) {
        return players[index];
    }

    // A function to return the amount paid by a player
    function getPaid(address player) public view returns (uint256) {
        return paid[player];
    }

    // A function to return the guess of a player
    function getGuess(address player) public view returns (uint256) {
        return guesses[player];
    }
}
