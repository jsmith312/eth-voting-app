const Voting = artifacts.require("Voting");
const truffleAssert = require('truffle-assertions');

contract("Voting", accounts => {
    it("should be initialized.", async () => {
        const votingInstance = await Voting.deployed();
        
        var list = await votingInstance.getCandidateList.call();
    
        assert.equal(list.length, 3, "There should be 3 candidates initialized.");
    });

    it("Should be able to place a vote for a valid candidate", async () => {
        const votingInstance = await Voting.deployed();
        const candAsBytes = web3.utils.fromAscii("Chad");
        var totalVotes = await votingInstance.totalVotesFor.call(candAsBytes);
        assert.equal(totalVotes, 0, "There should be no votes.");

        await votingInstance.voteForCandidate(candAsBytes);
        
        totalVotes = await votingInstance.totalVotesFor.call(candAsBytes);
        assert.equal(totalVotes, 1, "Vote should have been counted.");
    });

    it("Should throw error for candidate not in system", async () => {
        const votingInstance = await Voting.deployed();
        const candAsBytes = web3.utils.fromAscii("Test3123");
        try {
            await votingInstance.totalVotesFor.call(candAsBytes);
            assert.fail();
        } catch(err) {
            assert.ok(err.message);
        }
        
    });
});
  