const assert = require('assert');

['Caml', 'Reason', 'Pascal'].forEach((lang) => {
  const contractName = 'Calculator' + lang;
  const Calculator = artifacts.require(contractName);

  contract(Calculator, async () => {
    let instance = null;

    before(async () => {
      instance = await Calculator.deployed();
    });

    it('Should try to add two integers and store the result in the storage', async () => {
      const i = 2;
      const j = 2;
      await instance.add(i, j);
      const storage = await instance.storage();
      assert.strictEqual(storage.toNumber(), i + j);
    });

    it('Should try to subtract two integers and store the result in the storage', async () => {
      const i = 2;
      const j = 1;
      await instance.subtract(i, j);
      const storage = await instance.storage();
      assert.strictEqual(storage.toNumber(), i - j);
    });

    it('Should try to multiply two integers and store the result in the storage', async () => {
      const i = 2;
      const j = 2;
      await instance.multiply(i, j);
      const storage = await instance.storage();
      assert.strictEqual(storage.toNumber(), i * j);
    });

    it('Should try to divide two integers and store the result in the storage', async () => {
      const i = 3;
      const j = 2;
      await instance.divide(i, j);
      const storage = await instance.storage();
      assert.strictEqual(storage.toNumber(), Math.floor(i / j));
    });

    it('Should try to divide by zero and fail', async () => {
      const i = 3;
      const j = 0;
      try {
        await instance.divide(i, j);
      } catch (error) {
        assert.strictEqual(error.message, 'DIV by 0');
      }
    });
  });
});
