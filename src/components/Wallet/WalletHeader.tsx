import React, { useState, useEffect } from "react";
import SyncIcon from '@mui/icons-material/Sync';

const BLOCKCYPHER_API_KEY: string | undefined = '81dcc65b90d8402199502b20d484bc2d';

const fetchWalletIds = async () => {
  try {
    const response = await fetch(
      `https://api.blockcypher.com/v1/btc/main/wallets?token=${BLOCKCYPHER_API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(`Error fetching wallet IDs:`, error.message);
    return [];
  }
};

const fetchBalance = async (walletId: string) => {
  try {
    const response = await fetch(
      `https://api.blockcypher.com/v1/btc/main/addrs/${walletId}/balance?token=${BLOCKCYPHER_API_KEY}`
    );
    const data = await response.json();
    console.log(`Balance for wallet ${walletId}:`, data);
  } catch (error: any) {
    console.error(`Error fetching balance for wallet ${walletId}:`, error.message);
  }
};

const fetchHistory = async (walletId: string) => {
  try {
    const response = await fetch(
      `https://api.blockcypher.com/v1/btc/main/addrs/${walletId}/full?token=${BLOCKCYPHER_API_KEY}`
    );
    const data = await response.json();
    console.log(`History for wallet ${walletId}:`, data);
  } catch (error: any) {
    console.error(`Error fetching history for wallet ${walletId}:`, error.message);
  }
};

const WalletHeader = () => {
  const [isSynced, setIsSynced] = useState(false);

  const handleSyncClick = async () => {
    setIsSynced(false);

    try {
      // Fetch wallet IDs dynamically
      const walletIds = await fetchWalletIds();
      console.log(walletIds.wallet_names);

      for (const walletId of walletIds.wallet_names) {
        await fetchBalance(walletId);
        await new Promise((resolve) => setTimeout(resolve, 200));
        await fetchHistory(walletId);
      }

      setIsSynced(true);

      setTimeout(() => {
        setIsSynced(false);
      }, 5000);
    } catch (error: any) {
      console.error(`Error during synchronization:`, error.message);
    }
  };

  return (
    <div className="flex justify-end gap-[40px]">
      <div className="flex items-center">
        {isSynced ? (
          <div className="flex gap-[11px] items-center text-[#F5CEA3]">
            <SyncIcon />
            Synchronized
          </div>
        ) : (
          <button
            className="flex gap-[11px] items-center text-[#F5CEA3] cursor-pointer"
            onClick={handleSyncClick}
          >
            <SyncIcon />
            Sync Now
          </button>
        )}
      </div>
    </div>
  );
};

export default WalletHeader;
