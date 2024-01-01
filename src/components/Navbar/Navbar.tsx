import React from "react";
import { Link, useLocation } from "react-router-dom";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="col-span-2 pl-[60px] pt-[52px] bg-[#1E2328] flex flex-col rounded-2xl m-4">
      <ul className="text-[#E7E7E7] flex flex-col gap-[30px]">
        <li className={`${currentPath === "/" ? "text-[#C78D4E]" : ""}`}>
        <Link to="/" className="flex items-center">
            <AccountBalanceWalletIcon className="mr-2" />
            Wallet
          </Link>
        </li>
        <li className={`${currentPath === "/transactions" ? "text-[#C78D4E]" : ""} `}>
        <Link to="/transactions" className="flex items-center">
            <CompareArrowsIcon className="mr-2" />
            Last Transactions
          </Link>
        </li>
      </ul>
      <div className="grow flex items-end py-[41px]">
        <button className="px-[25px] py-[8px] bg-[#785B3C] text-[#F5CEA3] rounded text-center">
          Support
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
