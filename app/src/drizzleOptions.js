import Web3 from "web3";
import Voting from './contracts/Voting.json';

const options = {
  web3: {
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [Voting],
  events: {
    Voting: ["VoteCast"]
  },
};

export default options;
