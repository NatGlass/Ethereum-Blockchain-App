require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ln4FFQDRyNd59x0TTbGf82QIB_mKrDsf',
      accounts: ['db2f477bf285f45b81d7ac540d689f89f2e30809aeac83bf0b1195799d1279ee']
    }
  }
}