import React, { useState } from 'react';
import {
    Form,
    Button,
    Input
} from 'antd';
export default ({drizzle, drizzleState}) => {
    // console.log(drizzleState);
    const [candidate, setCandidate] = useState("");
    const [txError, setTxError] = useState("");

    const vote = async () => {
        if (!candidate || !candidate.length) {
            setTxError("Empty String");
        }
        try {
            var txIndex = await drizzle
            .contracts
            .Voting
            .methods
            .voteForCandidate
            // weird error for trying to catch 
            .cacheSend(drizzle.web3.utils.fromAscii(candidate))
            var txKey = drizzleState.transactionStack[txIndex];
            var obj = drizzleState.transactions[txKey];
            if (obj && obj.errors && obj.errors.length > 0) {
                console.log(obj.error)
                setTxError(obj.error.message);
            }
            if (txError || txError.length > 0) {
                setTxError(null);
            }
        } catch(err) {
            console.log(err);
            setTxError(err);
        }
    }
    
    var hasError = txError != null && txError.length > 0;

    return (
        <Form style={{margin: "15px 0px"}}>
            <Form.Item
                    validateStatus={hasError ? 'error' : ''}
                    help={hasError ? "Should vote for valid candidate." : ''}
                    name={'Candidate'}
                    label={'Candidate'}>
                <Input 
                    style={{maxWidth: "200px"}}
                    onChange={e => setCandidate(e.target.value)}/>
            </Form.Item>
            <Form.Item>
                <Button 
                    onClick={vote}
                    type="primary" 
                    htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}