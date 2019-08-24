// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var CustomERC721Token = artifacts.require("CustomERC721Token");

module.exports = async function(deployer, network) {
  if (network === 'development')
  {
  await deployer.deploy(CustomERC721Token);
  }
  await deployer.deploy(SquareVerifier);
  const squareVerifier = await SquareVerifier.deployed();
  await deployer.deploy(SolnSquareVerifier, squareVerifier.address);

};
