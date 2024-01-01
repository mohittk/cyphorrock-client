import React, { useState, useEffect } from "react";
import CoinsList from "../components/Wallet/CoinsList";
import Navbar from "../components/Navbar/Navbar";
import tickIcon from "../assets/tickIcon.svg";
import WalletHeader from "../components/Wallet/WalletHeader";
import WalletList from "../components/Wallet/WalletList";
// import * as bitcoin from 'bitcoinjs-lib';
// import * as bip39 from 'bip39';
// import {string;P32Factory } from 'bip32'
// import * as ecc from 'tiny-secp256k1';
// const bip32 = BIP32Factory(ecc);



export default function Wallet() {
  const [isImportPopupOpen, setImportPopupOpen] = useState(false);
  const [walletName, setWalletName] = useState("");
  const [walletMnemonic, setWalletMnemonic] = useState("");
  const [wallets, setWallets] = useState<{ name: string; mnemonic: string, balance: string }[]>(
    []
  );
  const [address, setAddress] = useState<string | undefined>(undefined);

  useEffect(() => {
    const storedWallets = localStorage.getItem("wallets");
    if (storedWallets) {
      setWallets(JSON.parse(storedWallets));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wallets", JSON.stringify(wallets));
  }, [wallets]);

  const openImportPopup = () => {
    setImportPopupOpen(true);
  };

  const closeImportPopup = () => {
    setImportPopupOpen(false);
    setWalletName("");
    setWalletMnemonic("");
  };

  const handleDeleteWallet = (index: number) => {
    setWallets((prevWallets) => {
      const updatedWallets = [...prevWallets];
      updatedWallets.splice(index, 1);
      return updatedWallets;
    });
  };
  const handleImportButtonClick = async() => {

    console.log("Importing Wallet:", walletName, walletMnemonic);

    try {
      const res = await fetch(`https://cyrock.onrender.com/getBalance`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({mnemonic: walletMnemonic}),
      });

      const balanceDetails = await res.json();
      setWallets((prev) => [
        ...prev,
        {name: walletName, mnemonic: walletMnemonic, balance: balanceDetails.balance}
      ])

    } catch(error){
      console.log(error);
    }
   
    

    // setWallets((prevWallets) => [
    //         ...prevWallets,
    //         { name: walletName, mnemonic: walletMnemonic}
    //   ]);
    

    
    // const mnuemonic = walletMnemonic;
    // const seed = bip39.mnemonicToSeedSync(mnuemonic);
    // const root = bip32.fromSeed(seed);

    // const account = root.derivePath("m/44'/0'/0'/0/0");

    // console.log(mnuemonic, '######');
    // console.log(account.neutered().toBase58(), '#####3');

    // const newIndex = 1;
    // const derivedNode = root.derive(newIndex);
    // const address = bitcoin.payments.p2pkh({pubkey: derivedNode.publicKey, network: bitcoin.networks.testnet}).address;

    // console.log(address, 'ADDDress');

    // async function getAddressDetails(address: string){
    //   try {
    //     const response = await fetch(`https://api.blockcypher.com/v1/btc/test3/addrs/${address}/balance`);
    //     const details = await response.json();
    //     setWallets((prevWallets) => [
    //       ...prevWallets,
    //       { name: walletName, mnemonic: walletMnemonic, balance: details.balance },
    //     ]);
    //     console.log("yessss");
    //     // return details;
    //   } catch(err: any){
    //     console.error(err.message);
    //   }
    // }

    // if(address){
    //   getAddressDetails(address);
    // }

    


    

    closeImportPopup();
  };

  return (
    <>
      <div
        className="grid grid-cols-12 bg-[#0A1018]"
        style={{
          height: "calc( 100vh - 55px )",
        }}
      >
        <Navbar />
        <div className=" col-span-9 bg-[#0A1018]">
          <div className="pt-[21px] px-[40px]">
            <WalletHeader />
            <div className="mt-[45px] flex justify-between items-center">
              <h1 className="text-[#C78D4E] text-[20px] leading-6">Wallet 1</h1>
              <button
                className="py-[8px] px-[26px] rounded  text-[#BEB4A8]"
                style={{ background: "rgba(255, 255, 255, 0.06)" }}
                onClick={openImportPopup}
              >
                + Import Coin
              </button>
            </div>
            <WalletList wallets={wallets} onDeleteWallet={handleDeleteWallet} />
          </div>
        </div>
      </div>

      {/* Import Popup */}
      {isImportPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <div className="bg-[#0A1018] p-8 rounded shadow-lg w-[600px]">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeImportPopup}
            >
              Close
            </button>
            <h2 className="text-2xl font-bold mb-8 text-center">
              Import Wallet
            </h2>
            <label htmlFor="walletName" className="block mb-2 text-sm">
              Enter your wallet name:
            </label>
            <input
              type="text"
              id="walletName"
              value={walletName}
              onChange={(e) => setWalletName(e.target.value)}
              className="w-full p-2 border rounded text-[#C78D4E] bg-[#0A1018] outline-none"
            />
            <label htmlFor="walletMnemonic" className="block mt-3 mb-2 text-sm">
              Enter your wallet mnemonic:
            </label>
            <textarea
              id="walletMnemonic"
              value={walletMnemonic}
              onChange={(e) => setWalletMnemonic(e.target.value)}
              className="w-full p-2 border rounded text-[#C78D4E] bg-[#0A1018] outline-none"
            />
            <button
              onClick={handleImportButtonClick}
              className="w-full mt-4 bg-[#C78D4E] text-white py-2 px-4 rounded hover:bg-yellow-700"
            >
              Submit
            </button>
            {/* Close button inside the modal */}
            <button
              className="mt-2 text-gray-500 hover:text-gray-700"
              onClick={closeImportPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
