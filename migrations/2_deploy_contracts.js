
const NotaryStar = artifacts.require('../contracts/NotaryStar.sol')


module.exports = async deployer =>  {

  await deployer.deploy(NotaryStar)
  const notaryStar = await NotaryStar.deployed()

  console.log('notary contract address: ', notaryStar.address)
  
};
