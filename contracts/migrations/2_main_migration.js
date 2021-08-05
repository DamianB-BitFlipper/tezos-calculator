const CalculatorCaml = artifacts.require('CalculatorCaml');

module.exports = async (deployer, _network) => {
  const storage = 0;
  deployer.deploy(CalculatorCaml, storage);
};
