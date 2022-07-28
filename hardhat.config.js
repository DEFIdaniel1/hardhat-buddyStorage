require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()
require('@nomiclabs/hardhat-etherscan')
require('./tasks/block-number')
require('hardhat-gas-reporter')
require('solidity-coverage')

const RINKEBY_URL = process.env.RINKEBY_URL || 'rinkeby-key'
const PRIVATE_KEY = process.env.PRIVATE_KEY || '0xkey'
const ETHERSCAN_API = process.env.ETHERSCAN_API || 'etherscan-key'
const COINMARKETCAP_API = process.env.COINMARKETCAP_API || 'coinmarketcap-key'

module.exports = {
	defaultNetwork: 'hardhat',
	networks: {
		rinkeby: {
			url: RINKEBY_URL,
			accounts: [PRIVATE_KEY],
			chainId: 4,
		},
		localhost: {
			url: 'http://127.0.0.1:8545/',
			// accounts: already added by hardhat
			chainId: 31337,
		},
	},
	etherscan: {
		apiKey: ETHERSCAN_API,
	},
	gasReporter: {
		enabled: true,
		outputFile: 'gas-report.txt',
		noColors: true,
		coinmarketcap: COINMARKETCAP_API,
		currency: 'USD',
		token: 'MATIC',
	},
	solidity: '0.8.7',
}
