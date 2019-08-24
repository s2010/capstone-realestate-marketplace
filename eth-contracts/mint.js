#!/usr/bin/env node
'use strict';

const Web3 = require('web3');
const fs = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');

// Infura key
const infuraKey = fs.readFileSync(".infuraKey").toString().trim();

// MetaMask seed
const mnemonic = fs.readFileSync(".mnemonic").toString().trim();

// Get contract file
const contractFile = require('./build/contracts/SolnSquareVerifier');
const contractAddress = "0x48304287E5e04a9BB0e0C92330E4d1bf7D315311";


const argv = process.argv.slice(2);
const proof = require(argv[0]); //pass json with proofs as first arg


(async () => {
  const provider = await new HDWalletProvider("push artwork regret gorilla crop jeans below slice craft blade foot harvest", `https://rinkeby.infura.io/v3/79892246b332412dbb2ccd1342fad16f`, 0);
  const web3 = await new Web3(provider);
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  const contract = await new web3.eth.Contract(contractFile.abi, contractAddress, { gasLimit: "4500000" });

  for (let i = 1; i <= 10; i++)
  {
    let testProof = proof[i - 1].proof;
    let input = proof[i - 1].inputs;
    console.log(`➡️ Balance before minting: ${(await contract.methods.totalSupply().call()).toString()} token`);
    console.log(`♻️ Minting >>>:\n- Token ID: ${i}`);

    try {
      let result = await contract.methods.mintSol(accounts[0], i,
        testProof.a, testProof.b, testProof.c, input).send({ from: accounts[0], gas: 2500000 });
      console.log(result)
    } 
    catch (e) 
    {
      throw e
    }

    console.log(`➡️ Balance after minting:  ${(await contract.methods.totalSupply().call()).toString()} token`);
  }

  process.exit(1);
  process.kill(process.pid);
})();

