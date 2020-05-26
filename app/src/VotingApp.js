import React from "react";
import { 
    Badge,
    Layout
} from 'antd';
import 'antd/dist/antd.css';

import AccountInfo from './components/AccountInfo';
import CandidateList from "./components/CandidateList";
import VotingForm from "./components/VotingForm";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const { Header, Content, Footer } = Layout;

export default ({drizzle, drizzleState}) => {
    const address = drizzleState.accounts[0];
    const walletFound = address !== null;
    return (
        <div>
            <ToastContainer/>
            <Layout>
                <Header style={{ backgroundColor : "gray" }}>
                <div>
                    <h2 style={{float:"left"}}>Voting App</h2>
                    <div style={{float:"right"}}>
                        {
                        walletFound ? 
                            <Badge size={20} status="processing" color="green" text="Wallet Found" /> :
                            <Badge color="red" status="processing" text="Wallet Not Found" />
                        } 
                    </div>
                </div>
                </Header>
                <Content style={{height: "100vh", padding: "15px 50px"}}>
                    {
                        walletFound && 
                            <AccountInfo 
                                accountBalance={drizzle.web3.utils.fromWei(drizzleState.accountBalances[address])}
                                address={address}/>
                    }
                    <CandidateList 
                        drizzle={drizzle} 
                        drizzleState={drizzleState}/>
                    <VotingForm 
                        drizzle={drizzle}
                        drizzleState={drizzleState}/>
                </Content>
                <Footer style={{backgroundColor: "gray"}}>
                    <p>Powered By ...</p>
                </Footer>
            </Layout>
        </div>
    );
}