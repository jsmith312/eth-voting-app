import React from 'react'
import {
    Row,
    Col,
    Statistic
} from 'antd';

const formatAddress = (address) => `${address.substring(0, 6)}...${address.substring(address.length-4, address.length)}`

export default ({address, accountBalance}) => {
    return (
        <Row style={{marginBottom: "15px"}}>
            <Col span={6}>
                <Statistic title={'Address'} value={formatAddress(address)}/>
            </Col>
            <Col span={6}>
                <Statistic title={'Ether Balance'} 
                    precision={2}
                    value={accountBalance}/>
            </Col>
        </Row>
    );
}