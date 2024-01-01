import React from "react";
import yearIcon from "../../assets/yearIcon.svg";
import textIcon from "../../assets/textIcon.svg";
import chevronDownIcon from "../../assets/chevronDownIcon.svg";
import SingleCoin from "./SingleCoin";
import WalletCoins from "./WalletCoins";
import Menu from "@mui/material/Menu";
import bitcoinIcon from "../../assets/bitcoinIcon.svg";
import ethereumIcon from "../../assets/ethereumIcon.svg";
import binanceIcon from "../../assets/binanceIcon.svg";
import ethereumBlueIcon from "../../assets/ethereumBlueIcon.svg";
const TransactionList = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="mt-[36px]">
    <div className="border border-[#161C23] py-4 px-8 flex justify-between ">
      <div className="text-[#ADABAA] text-xs">Total Transactions-3 </div>
    </div>
    <div className="mt-6 grid  gap-[10px]">
    <div className="pt-[25px] grid grid-cols-5 items-center">
        <div className="flex items-center gap-[4px] pl-6">
          <span className="text-[#ADABAA] text-sm">Name</span>
        </div>

        <div className="text-[#ADABAA] text-sm justify-self-center">
          Holding in BTC
        </div>
        <div className="text-[#ADABAA] text-sm justify-self-center">
          Holding in USD
        </div>

        {/* <div className="text-[#ADABAA] text-sm justify-self-center">
          Actions
        </div> */}
        <div className="text-[#ADABAA] text-sm cursor-pointer">
        <span className="text-[#ADABAA] text-sm">Transaction Type</span>

          
        </div>
        <div className="text-[#ADABAA] text-sm cursor-pointer">
        <span className="text-[#ADABAA] text-sm">Status</span>

          
        </div>
      </div>
      <SingleCoin name="Bitcoin" val="BTC 0.0025600" src={bitcoinIcon} />
      <SingleCoin name="ETHEREUM" val="ETH 0.0025600" src={ethereumIcon} />
      <SingleCoin name="BINANCE COIN" val="BTC 0.0025600" src={binanceIcon} />
      <SingleCoin name="Bitcoin" val="BTC 0.0025600" src={bitcoinIcon} />
      <SingleCoin
        name="ETHEREUM"
        val="ETH 0.0025600"
        src={ethereumBlueIcon}
      />
    </div>
  </div>
  );
};

export default TransactionList;
