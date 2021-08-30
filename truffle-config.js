const path = require("path");
require('dotenv').config({ path: './config/config.env'})

const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),

  networks: {
    // develop: {
    //   port: 7545
    // }
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
     rinkeby: {
       provider: () => new HDWalletProvider({
         mnemonic: process.env.MNEMONIC,
         providerOrUrl: process.env.RINKEBY_ENDPOINT


       })

    }
  },
  compilers: {
    solc: {
      version: ">=0.4.0"
    }
  },




};
