# truffle-test

This test project demonstrates how to invoke from Javascript code abstractions produced by Truffle v3 migration. 

## Versions of components used (from package.json):  

    "ethereumjs-testrpc": "^6.0.3",
    "truffle": "^3.4.9",
    "truffle-contract": "^3.0.0",
    "web3": "^1.0.0-beta.20"

## To run the project: 

1. Initialize the web project dependencies. Launch a command prompt in truffle-test project folder and execute: 

```bash
$ npm install 
```

2. Run a local bockchain for development with `testrpc`:

```bash
$ testrpc
``` 

3. Deploy the Solidity contracts by using `Truffle`. From a Power Shell window in the project folder, execute: 

```bash
$ truffle migrate --reset 
```

4. Run the web project. In a new command prompt window, run 

```bash
$ npm start 
```

5. Launch a new browser window and navigate to 

```bash
http://localhost:8000/demo 
```

## Useful links:

- http://truffleframework.com/docs/getting_started/contracts
- https://github.com/trufflesuite/truffle-contract/issues/56
- https://ethereum.stackexchange.com/questions/15506/accessing-truffle-contract-abstractions-from-external-js-script/15523
- https://github.com/ethereum/web3.js/issues/989

