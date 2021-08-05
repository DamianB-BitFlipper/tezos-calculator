const CalculatorReason = artifacts.require('CalculatorReason');

module.exports = async (deployer, _network) => {
  const storage = 0;
  deployer.deploy(CalculatorReason, storage);
};
