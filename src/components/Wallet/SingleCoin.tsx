import { useState } from "react";
import bitcoinIcon from "../../assets/bitcoinIcon.svg";
import recieveIcon from "../../assets/recieveIcon.svg";
import sendIcon from "../../assets/sendIcon.svg";
interface SingleCoinProps {
  name: string;
  val: string;
  src: string;
  // onDelete: () => void; // Add onDelete prop
}
const SingleCoin = (props: SingleCoinProps) => {
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const openDialog = (val: boolean) => {
    setShouldOpenDialog(val);
  };
  return (
    <div className="">
      <div className="bg-[#161C23] pt-[19px] pb-[14px]  grid grid-cols-9 items-center">
        
        <div className="col-span-2 flex items-center gap-[4px] pl-6">
          <img src={props.src} alt="" />{" "}
          <span className="text-[#ADABAA] text-sm ">{props.name}</span>
        </div>
        <div className="col-span-2 text-[#ADABAA] text-sm justify-self-center">
          {props.val}
        </div>
        <div className="col-span-2 text-[#ADABAA] text-sm justify-self-center">
          USD 0.5268
        </div>
        <div className="flex gap-[25px] justify-self-center col-span-2">
            <img src={recieveIcon} alt="" />
            <span className="text-[#8484F1] text-[14px]">RECIEVE</span>
          <div className="flex items-center gap-[6px]">
            <img src={sendIcon} alt="" />
            <span className="text-[14px] text-[#CAA276]">SEND</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoin;
