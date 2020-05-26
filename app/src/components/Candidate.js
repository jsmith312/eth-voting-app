import React, { useEffect, useState } from "react"
import {
    Col,
    Statistic,
    Card
} from 'antd';

export default ({drizzle, drizzleState, candidateName}) => {
    const [votesKey, setVotesKey] = useState(0);

    useEffect(() => {
        const getData = async () => {
            var key = await drizzle
            .contracts
            .Voting
            .methods
            .totalVotesFor
            .cacheCall(candidateName);
            
            setVotesKey(key);
        }
        getData()
    }, [candidateName]);
    
    const { Voting } = drizzleState.contracts;
    const numVotes = Voting.totalVotesFor[votesKey];
    if (!numVotes) {
        return null;
    }

    return (
        <Col span={3}>
            <Card>
                <Statistic title={drizzle.web3.utils.toAscii(candidateName)} value={numVotes.value} />
            </Card>
        </Col>
    )
}