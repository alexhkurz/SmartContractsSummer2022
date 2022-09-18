Exercises:

- Write a smart contract that can receive money and send it back. Interface:

    ```solidity
    contract PayAndGuess0 {
        address payable public payer; // address of the payer
        uint public paid; // amount paid

        function doPay() public payable // payer sends money
        function disburse() public // amount paid is send back to payer
    }
    ```
    What happens if several players call the function `doPay` "simultaneously"?

- Extend the smart contract so that it remembers who sent money and how much. `disburse` works so that the contract acts as a FILO buffer (stack). Interface:

    ```solidity
    contract PayAndGuess1 {
        address payable [] public payers; // list of payers
        mapping(address => uint) public paid; // amounts paid for each payer

        function doPay() public payable // same as above

        function disburse() public // amount paid is send back to last payer
    }
    ```

- Now change `disburse` so that it picks a random player who gets everything that has been paid. Interface:

    ```solidity
    contract PayAndGuess2 {
        ...
        function disburse() public // sends money to random winner
    }
    ```

    A function that picks a random integer can be implemented as 

    ```solidity    
    function random() private view returns(uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, payers)));
        }
    ```

    Such a function is not necessarily secure, but will do for now.

- Given that the contract starts with balance 0, does the contract always disburse the sum of all payments? What happens if the same player plays twice? (We will see below an elegant way how to enforce that this cannot happen.) Find a test in the RemixIDE that leaves the contract with a positive balance after disbursing.

- Now let the payers be players that not only pay but also guess a number between 1 and 10. To disburse, pick a random number in this range, determine as the winner the player closest to this number and disburse to the winner.

    ```solidity
    contract PayAndGuess3 {
        address payable[] public players;
        mapping(address => uint) public paid;
        mapping(address => uint) public guesses;
        ...
        }
    ```


- Add various requirements and error messages to the functions. (Adding requirements late can make debugging in the RemixIDE easier because requirements restrict the set of available tests.)
    - A player cannot payAndGuess twice.
    - The paid amount cannot be 0.
    - The guesses must be integers in the range [1,10].

    The requirements can go into the indicated place:

    ```solidity
    contract PayAndGuess4 {
        ...
        function doPlayAndGuess(uint guess) public payable {
        <requirements here>
        ...
        }
    ...
    }
    ```

## References

[`delete`](https://docs.soliditylang.org/en/v0.4.24/types.html#delete)  
[`mapping`](https://docs.soliditylang.org/en/v0.8.7/types.html#mapping-types)

<!--
## Some links that look interesting but which I didn't read in detail

- [Remix Debugger](https://medium.com/remix-ide/remix-debugger-b542ea24a0d)
-->

