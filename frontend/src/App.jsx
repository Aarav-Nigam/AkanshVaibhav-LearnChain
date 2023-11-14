import { useState } from 'react'
import { useEffect } from 'react'
import {ethers} from "ethers"
import abi from "./contractJSON/LearnChain.json"
import {  Routes, Route, BrowserRouter} from 'react-router-dom';

import Home from './components/home.jsx';
import PastProposals from './components/PastProposals.jsx'
import Profile from './components/Profile.jsx'
import './App.css'


function App() {

    const [state,setState] = useState({
        provider:null,
        signer:null,
        contract:null
    })

    const[account, setAccount] = useState("Not Connected")
    useEffect(()=>{
        const template=async()=>{
            const contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3";
            const contractABI=abi.abi;
            //MetaMask oart
            // 1. In order to do transaction on goerli testnet
            // 2. Metamask consist of infura api which actually help in connecting to the blockchain

            const {ethereum}=window;

            const account = await ethereum.request({
                method:"eth_requestAccounts"
            })

            setAccount(account)

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();

            const contract = new ethers.Contract(
                contractAddress,
                contractABI,
                signer
            )
            console.log(contract)

            setState({provider,signer,contract});
        }
        template();
    },[])

    console.log()

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home state={state}/>} />
            <Route path="/PastProposals" element={<PastProposals state={state}/>} />
            <Route path="/Profile" element={<Profile state={state} account={account}/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App