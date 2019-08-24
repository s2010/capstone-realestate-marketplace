# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

### How to run tests

* `git clone https://github.com/s2010/capstone-realestate-marketplace.git`
* `cd Blockchain-Capstone`
* `npm install`
* `cd eth-contracts`
* Start `ganache-cli -m "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat"`
* `truffle compile --all`
* migrate/deploy the smart contracts locally `truffle migrate --reset`
* Run all tests `truffle test`


## Account Addresses

1. Owner Address: 0x16a41FC04656c33E86D3BAcbe29aB44f6637121C
2. Buyer Address: 0xc82602c2302ee42fe70312650f55eea52738cb02
3. ZoKrates Address (Verifier Contract): 0x366De0f3a4192661a625bEFEC9467FB5E8c2C2fd
4. ERC721 Contract Address: 0x48304287E5e04a9BB0e0C92330E4d1bf7D315311

## OpenSea StoreFront & Etherscan Links:

1. For the Owner: [Owner StoreFront](https://rinkeby.opensea.io/accounts/0x16a41FC04656c33E86D3BAcbe29aB44f6637121C)
2. For the Buyer: [Buyer StoreFront](https://rinkeby.opensea.io/accounts/0xc82602c2302ee42fe70312650f55eea52738cb02) 
3. Etherscan: [Etherscan Contract Link](https://rinkeby.etherscan.io/address/0x48304287E5e04a9BB0e0C92330E4d1bf7D315311)

### ABIs

You can find all *ABIs* under `et-contracts/build/contracts` after you compile using `truffle compile --all`.


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x6acfc0


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        4966026
   > block timestamp:     1566628036
   > account:             0x16a41FC04656c33E86D3BAcbe29aB44f6637121C
   > balance:             18.734640796
   > gas used:            248741
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.000248741 ETH

   -------------------------------------
   > Total cost:         0.000248741 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > block number:        4966028
   > block timestamp:     1566628044
   > account:             0x16a41FC04656c33E86D3BAcbe29aB44f6637121C
   > balance:             18.733398178
   > gas used:            1215595
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.001215595 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        4966029
   > block timestamp:     1566628063
   > account:             0x16a41FC04656c33E86D3BAcbe29aB44f6637121C
   > balance:             18.72937294
   > gas used:            4025238
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.004025238 ETH

   -------------------------------------
   > Total cost:         0.005240833 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.005489574 ETH


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6ad332


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xf92b9024c4ffe5a301b91abdffb27680d1e956ee7b9519a42ac43b5dfabd7085
   > Blocks: 1            Seconds: 17
   > contract address:    0x11c4EE96d384c0c4281E04794d0891b3adA4206D
   > block number:        4966030
   > block timestamp:     1566628123
   > account:             0x16a41FC04656c33E86D3BAcbe29aB44f6637121C
   > balance:             18.734625796
   > gas used:            263741
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.000263741 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.000263741 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xf0f4bfeca02e05b3f5106d7c20fc6f97c2b79d0bbe72180eec89f78cee985222
   > Blocks: 0            Seconds: 9
   > contract address:    0x366De0f3a4192661a625bEFEC9467FB5E8c2C2fd
   > block number:        4966032
   > block timestamp:     1566628153
   > account:             0x16a41FC04656c33E86D3BAcbe29aB44f6637121C
   > balance:             18.733368178
   > gas used:            1215595
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.001215595 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x9ca239aa217e02d67f818295338968b379018745b632c0ab26a98286ce50b81c
   > Blocks: 0            Seconds: 5
   > contract address:    0x48304287E5e04a9BB0e0C92330E4d1bf7D315311
   > block number:        4966033
   > block timestamp:     1566628168
   > account:             0x16a41FC04656c33E86D3BAcbe29aB44f6637121C
   > balance:             18.72917794
   > gas used:            4190238
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.004190238 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.005405833 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.005669574 ETH

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
