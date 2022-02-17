// https://eth-ropsten.alchemyapi.io/v2/xHX2wFM7pU4kVnlu4Zof-_eP1BV-uI3J

require ('@nomiclabs/hardhat-waffle');

module.exports={
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/xHX2wFM7pU4kVnlu4Zof-_eP1BV-uI3J',
      accounts: ['dce6efe3c21a9dc455ee35dc5e85bdb3d3a7412d5589ec3e41dee654bb60beb5']
    },
  },
}
