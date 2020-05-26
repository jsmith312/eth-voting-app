import React, {useState, useEffect} from 'react';
import Candidate from './Candidate';
import {
    Row,
} from 'antd';

export default({drizzle, drizzleState}) => {    
    const voteContract = drizzle.contracts.Voting;
    const [dataKey, setDataKey] = useState("");

    useEffect(() => {
        const getData = async () => {
            const dataKey = await voteContract.methods.getCandidateList.cacheCall();
            setDataKey(dataKey);
        }
        getData();
    }, [dataKey]);
    
    const { Voting } = drizzleState.contracts;
    const candidates = Voting.getCandidateList[dataKey];
    if (!candidates) {
        return null;
    }
    return (
        <Row gutter={16}>
            {
                candidates.value.map((c,i) => 
                    <Candidate 
                        key={i}
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        candidateName={c}/>
                )
            }
        </Row>
    ); 
}