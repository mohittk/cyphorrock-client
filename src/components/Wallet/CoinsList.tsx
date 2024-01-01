import React from "react";
import yearIcon from "../../assets/yearIcon.svg";
import textIcon from "../../assets/textIcon.svg";
import chevronDownIcon from "../../assets/chevronDownIcon.svg";
import SingleCoin from "./SingleCoin";
import Menu from "@mui/material/Menu";
import bitcoinIcon from "../../assets/bitcoinIcon.svg";
import ethereumIcon from "../../assets/ethereumIcon.svg";
import binanceIcon from "../../assets/binanceIcon.svg";
import ethereumBlueIcon from "../../assets/ethereumBlueIcon.svg";
const CoinsList = () => {
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
        <div className="text-[#ADABAA] text-xs">Total Coins-3 </div>
        <div className="flex gap-[68px] items-center">
          <div className="flex gap-[6px] cursor-pointer items-center">
            <img src={yearIcon} alt="" />
            <span className="text-[#ADABAA] text-xs">Year</span>
            <img src={chevronDownIcon} />
          </div>
          <div
            className="flex gap-[6px] cursor-pointer items-center"
            onClick={handleClick}
          >
            <img src={textIcon} alt="" />
            <span className="text-[#ADABAA] text-xs">A-Z</span>
            <img src={chevronDownIcon} />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              style: {
                background: "#404854",
              },
            }}
          >
            <div className="text-[white] py-3 px-8">
              <ul className="grid gap-3">
                <li className="text-xs text-[#959595] cursor-pointer">
                  Amount High - Low
                </li>
                <li className="text-xs text-[#959595] cursor-pointer">
                  Amount Low - High
                </li>
                <li className="text-xs text-[#959595] cursor-pointer">
                  Arrange A - Z
                </li>
                <li className="text-xs text-[#959595] cursor-pointer">
                  Arrange Z - A
                </li>
              </ul>
            </div>
          </Menu>
        </div>
      </div>
      <div className="mt-6 grid gap-[10px]">
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

export default CoinsList;
