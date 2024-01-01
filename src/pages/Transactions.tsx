import React from 'react';
import CoinsList from '../components/Wallet/CoinsList';
import Navbar from '../components/Navbar/Navbar';
import tickIcon from "../assets/tickIcon.svg"
import WalletHeader from '../components/Wallet/WalletHeader';
import WalletList from '../components/Wallet/WalletList';
import TransactionList from '../components/Wallet/TransactionList';

export default function Transactions() {
    return(
        <>
        <div className="grid grid-cols-12 bg-[#0A1018]" style={{
        height: "calc( 100vh - 55px )"
      }}>
        <Navbar />
        <div className=" col-span-9 bg-[#0A1018]">
        <div className="pt-[21px] px-[40px]">
            <WalletHeader />
            
            <TransactionList/>
        </div>
        </div>
      </div>
        </>
    )
}