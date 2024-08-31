import { useEffect, useState } from "react";
import { getEthereumWalletBalance, getSolanaWalletBalance } from "../utils/cryptoWallet";

const Balance = ({ publicKey }) => {
    const [balance, setBalance] = useState(0);

    // Testing

    const type = "ethereum";
    // const type = "solana";
    if (type === "ethereum") {
        publicKey = "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97";
    } else {
        publicKey = "D27DgiipBR5dRdij2L6NQ27xwyiLK5Q2DsEM5ML5EuLK";
    }

    // Testing

    useEffect(() => {
        const getBalance = async () => {
            let walletBalance = 0;
            if (publicKey.toString().startsWith("0x")) {
                walletBalance = await getEthereumWalletBalance(publicKey) + " ETH";
            } else {
                walletBalance = await getSolanaWalletBalance(publicKey) + " SOL";
            }
            setBalance(walletBalance);
        }
        getBalance();
    }, [balance]);

    return (
        <>
            <p>Balance: <b>{balance}</b></p>
        </>
    )
}

export default Balance;