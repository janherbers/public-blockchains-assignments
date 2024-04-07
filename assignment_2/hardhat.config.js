require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    customNetwork: {
      url: "http://134.155.50.136:8506", // JSON-RPC URL
      chainId: 1337, // Chain ID
      accounts: ['b48dd1e8092e96fa95c5bc08a9ff33998455292719dbc7defe20803209ce0668'] //private key 
    }
  },
  solidity: "0.8.0",
  defaultNetwork: "customNetwork" // Set the custom network as the default
};
