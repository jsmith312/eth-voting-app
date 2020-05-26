pragma solidity >=0.4.21 <0.7.0;

contract Voting {

    mapping(bytes32 => uint8) votesRecieved;
    bytes32[] public candidateList;

    event VoteCast (bytes32);

    constructor() public {
        candidateList.push("Chad");
        candidateList.push("Thad");
        candidateList.push("Brad");
    }

    function getCandidateList() public view returns (bytes32[] memory ) {
        return candidateList;
    }

    function totalVotesFor(bytes32 candidate) public view returns (uint8) {
        require(validCandidate(candidate), "Not a valid candidate.");
        return votesRecieved[candidate];
    }

    function voteForCandidate(bytes32 candidate) public {
        require(validCandidate(candidate), "Not a valid candidate.");
        votesRecieved[candidate] += 1;
        emit VoteCast(candidate);
    }

    function validCandidate(bytes32 candidate) public view returns (bool) {
        for(uint i = 0; i < candidateList.length; i++) {
            if (candidateList[i] == candidate) {
                return true;
            }
        }
        return false;
    }
}