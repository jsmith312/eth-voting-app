### Simple Ethereum app using Truffle and Ganache ###
Simple voting application, utilizing (drizzle)[https://www.trufflesuite.com/drizzle] and (ganache)[https://github.com/trufflesuite/ganache-cli/blob/master/README.md].

## System Requirements ##
- Node (v8.9.4 or later)
- (Ganache-Cli)[https://github.com/trufflesuite/ganache-cli/blob/master/README.md]
- (Truffle)[https://www.trufflesuite.com/docs/truffle/getting-started/installation]

## Running the app ## 

# Start the local blockchain with ganache-cli #
- `npm install`
- `chmod +x ./startup.sh`
- `./startup.sh` 

# compile and deploy the smart contract #
in a separate terminal window: 
- `truffle compile` 
- `truffle migrate --network ganache`

# Start the client # 
- `cd app && npm install`
- `npm start`
