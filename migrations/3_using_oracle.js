const UsingOracle = artifacts.require('UsingOracle.sol');
const Oracle = artifacts.require('Oracle.sol');

module.exports = (deployer) => {
  deployer.deploy(UsingOracle, Oracle.address);
};
