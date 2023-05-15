import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/B5KriHFimmz8KKi0GBjwBXA1kPuRSDF4',
      accounts: ['8d9a29d13d08e5c2032d5babaabc3feb1ae9503b8187f0fdcbf092f167486569']
    }
  }
};

export default config;
