# LuckyNumberGame
A Solidity contract for a simple game where players can make a guess of a lucky number and pay a fee to participate. The player with the guess that is closest to the randomly chosen "lucky number" wins and is awarded the total amount of fees paid by all players.

## Features
Players can make a guess and pay a fee to participate in the game
The player with the guess closest to the randomly chosen "lucky number" wins and is awarded the total amount of fees paid by all players
Players can only make one guess and are prevented from paying multiple fees
Getting Started
To start playing the LuckyNumberGame, you will need a Ethereum wallet and some Ether to pay the fee to participate. Once you have these, you can call the play(uint256 guess) function with your guess and the desired fee as the parameters.

Once at least one player has made a guess, the contract owner can call the determineWinner() function to select the lucky number and award the winnings to the appropriate player.

## Notes
The play(uint256 guess) function requires that the fee be positive and that the guess be within the range of 1 to 10, inclusive.
The determineWinner() function will award the minimum of the total fees paid and the contract balance to the winner.
The contract state is reset and all stored data is deleted after the winner is determined.
Checks to ensure that players cannot make multiple guesses and pay multiple fees
