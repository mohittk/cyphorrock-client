import React from "react";
import yearIcon from "../../assets/yearIcon.svg";
import textIcon from "../../assets/textIcon.svg";
import chevronDownIcon from "../../assets/chevronDownIcon.svg";
import WalletCoins from "./WalletCoins";
import Menu from "@mui/material/Menu";
import bitcoinIcon from "../../assets/bitcoinIcon.svg";
import ethereumIcon from "../../assets/ethereumIcon.svg";
import binanceIcon from "../../assets/binanceIcon.svg";
import ethereumBlueIcon from "../../assets/ethereumBlueIcon.svg";
interface Wallet {
  name: string;
  mnemonic: string;
  balance: string;
}

interface WalletListProps {
  wallets: Wallet[];
  onDeleteWallet: (walletIndex: number) => void;
}

const WalletList = ({ wallets, onDeleteWallet }: WalletListProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (index: number) => {
    onDeleteWallet(index);
    handleClose();
  };
  return (
    <div className="mt-[36px]">
      <div className="border border-[#161C23] py-4 px-8 flex justify-between">
        <div className="text-[#ADABAA] text-xs">
          Total Coins-{wallets.length}{" "}
        </div>
      </div>
      <div className="pt-[25px] grid grid-cols-3 items-center">
        <div className="flex items-center gap-[4px] pl-6">
          <span className="text-[#ADABAA] text-sm">Name</span>
        </div>

        <div className="text-[#ADABAA] text-sm justify-self-center">
          Holding
        </div>

        {/* <div className="text-[#ADABAA] text-sm justify-self-center">
          Actions
        </div> */}
        <div className="text-[#ADABAA] text-sm justify-self-center cursor-pointer">
        <span className="text-[#ADABAA] text-sm">Actions</span>

          
        </div>
      </div>
      <div className="mt-6 grid gap-[10px]">
        {wallets.map(
          (wallet: { name: string; mnemonic: string, balance: string}, index: number) => (
            <>
              <WalletCoins
                key={index}
                name={wallet.name}
                val={wallet.mnemonic}
                balance={wallet.balance}
                onDelete={() => handleDelete(index)}
              />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default WalletList;
