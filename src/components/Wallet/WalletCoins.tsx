import { useState } from "react";
import bitcoinIcon from "../../assets/bitcoinIcon.svg";
import recieveIcon from "../../assets/recieveIcon.svg";
import sendIcon from "../../assets/sendIcon.svg";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
interface SingleCoinProps {
  name: string;
  val: string;
  balance: string;
  onDelete: () => void;
}
const SingleCoin = (props: SingleCoinProps) => {
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const openDialog = () => {
    setShouldOpenDialog(true);
  };

  
  return (
    <div className="">
      <div className="bg-[#161C23] pt-[19px] pb-[14px] grid grid-cols-3 items-center">
        <div className="flex items-center gap-[4px] pl-6">
          <img src={bitcoinIcon} alt="" />{" "}
          <span className="text-[#ADABAA] text-sm">{props.name}</span>
        </div>

        {/* <div className="text-[#ADABAA] text-sm justify-self-center">
          {props.balance}
        </div> */}

        <div className="text-[#ADABAA] text-sm justify-self-center">
          {props.balance}
        </div>
        <div className="text-[#ADABAA] text-sm justify-self-center cursor-pointer">
          <DeleteOutlineIcon onClick={props.onDelete}/>

          
        </div>
      </div>
    </div>
  );
};

export default SingleCoin;
