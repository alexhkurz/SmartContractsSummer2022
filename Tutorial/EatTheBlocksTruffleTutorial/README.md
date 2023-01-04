# README

These notes follow the tutorial

- EatTheBlocks: [Truffle Tutorial for Beginners | Compile, Test & Deploy Smart contracts to any EVM Blockchain](https://www.youtube.com/watch?v=62f757RVEvU)

and were taken in January 2023. The following changes have occurred since the video tutorial was made.

- [`truffle init` not creating `Migrations.sol`](https://stackoverflow.com/questions/73486030/truffle-init-not-creating-migration-sol-file)

Installing Truffle

```
npm install -g truffle
```

Creating the Truffle project

```
mkdir EatTheBlocksTruffleTutorial
cd EatTheBlocksTruffleTutorial
truffle init
```

Compiling, testing, deploying on ganache

```
truffle compile
cd test
truffle test
cd ..
truffle develop
    migrate --reset
    .exit
```

At this point I cannot reproduce what is described [at this point](https://www.youtube.com/watch?v=62f757RVEvU#17m5s) of the tutorial.