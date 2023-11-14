import React from 'react';
import "../style/Profile.css";
import { ethers } from "ethers";

const Profile = ({ state, account }) => {

    const createProposal = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const name = document.querySelector("#Name").value;
        const description = document.querySelector("#Description").value;
        const votingPeriod = document.querySelector("#VotingPeriod").value;

        const creation = await contract.createProposal(name, description, votingPeriod);
        await creation.wait();
        console.log("Proposal Created");
    }

    const AddMember = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const address = document.querySelector("#Add-Address").value;
        const addmember = await contract.addMember(address);
        await addmember.wait();
        console.log("Member Added");
    }

    const RemoveMember = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const rmaddress = document.querySelector("#Rm-Address").value;
        const rmmember = await contract.removeMember(rmaddress);
        await rmmember.wait();
        console.log("Member Removed");
    }

    const completeProposal = async () => {
        console.log("Nothing")
    }

    const executeProposal = async () => {
        console.log("Nothing")
    }

    const RemoveProposal = async () => {
        console.log("Nothing")
    }

    return (
        <div className="container mt-5">
            <h3>Your Account: {account[0]}</h3>
            
            <form onSubmit={createProposal} className="mt-4 border p-4">
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="Description" />
                </div>

                <div className="mb-3">
                    <label htmlFor="VotingPeriod" className="form-label">Voting Period in Days</label>
                    <input type="text" className="form-control" id="VotingPeriod" />
                </div>

                <button type="submit" className="btn btn-primary">Create Proposal</button>
            </form>

            <div className="mt-4 border p-4">
                <form onSubmit={AddMember}>
                    <div className="mb-3">
                        <label htmlFor="Add-Address" className="form-label">Member Address</label>
                        <input type="text" className="form-control" id="Add-Address" />
                    </div>

                    <button type="submit" className="btn btn-success">Add Member</button>
                </form>
            </div>

            <div className="mt-4 border p-4">
                <form onSubmit={RemoveMember}>
                    <div className="mb-3">
                        <label htmlFor="Rm-Address" className="form-label">Member Address</label>
                        <input type="text" className="form-control" id="Rm-Address" />
                    </div>

                    <button type="submit" className="btn btn-danger">Remove Member</button>
                </form>
            </div>

            <div className="mt-4 border p-4">
                <button onClick={() => completeProposal()} className="btn btn-info">completeProposal</button>
            </div>
            <div className="mt-4 border p-4">
                <button onClick={() => executeProposal()} className="btn btn-warning">executeProposal</button>
            </div>
            <div className="mt-4 border p-4">
                <button onClick={() => RemoveProposal()} className="btn btn-danger">RemoveProposal</button>
            </div>
        </div>
    )
}

export default Profile;
