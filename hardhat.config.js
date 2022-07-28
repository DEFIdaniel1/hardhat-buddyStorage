require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")

const RINKEBY_URL = process.env.RINKEBY_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API = process.env.ETHERSCAN_API

module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		rinkeby: {
			url: RINKEBY_URL,
			accounts: [PRIVATE_KEY],
			chainId: 4,
		},
	},
	etherscan: {
		apiKey: ETHERSCAN_API,
	},
	solidity: "0.8.7",
}
