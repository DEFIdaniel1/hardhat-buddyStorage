require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const RINKEBY_URL = process.env.RINKEBY_URL
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY

module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		rinkeby: {
			url: RINKEBY_URL,
			accounts: [RINKEBY_PRIVATE_KEY],
			chainId: 4,
		},
	},
	solidity: "0.8.7",
}
