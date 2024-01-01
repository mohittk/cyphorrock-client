import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wallet from "../pages/Wallet"
import Transactions from '../pages/Transactions';
import { Buffer } from 'buffer';

export default function Router() {
    return (
        <>
        <BrowserRouter>
                <Routes>
                <Route path="/" element={<Wallet />} />
                <Route path="/transactions" element={<Transactions />} />
                </Routes>
        </BrowserRouter>
        </>
    );
}