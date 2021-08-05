const CalculatorPascal = artifacts.require('CalculatorPascal');

module.exports = async (deployer, _network) => {
  const storage = 0;
  deployer.deploy(CalculatorPascal, storage);
};
