import { useState } from 'react';
import '../App.css';
import Wallet from './Wallet';
import { generateSeedFromMnemonic, generateSolanaKeyPair } from "../utils/cryptoWallet.js";

const SolanaWalletBox = ({ mnemonic }) => {
    const [solanaWalletIndex, setSolanaWalletIndex] = useState(1);
    const [solanaWallets, setSolanaWallets] = useState([]);

    const seed = generateSeedFromMnemonic(mnemonic);

    const createSolanaWallet = () => {
        const [privateKey, publicKey] = generateSolanaKeyPair(seed, solanaWalletIndex);
        const newSolanaWallet = <Wallet privateKey={privateKey} publicKey={publicKey} solanaWalletIndex={solanaWalletIndex} />;
        setSolanaWallets([...solanaWallets, newSolanaWallet]);
        setSolanaWalletIndex(solanaWalletIndex + 1);
    }

    return (
        <div id="wallet-box">
            <h3 id="wallet-name">Solana Wallets</h3>
            <button id='create-wallet-btn' onClick={createSolanaWallet}>Create SOL wallet</button>
            <div id='sol-wallet-list'>
                {solanaWallets}
            </div>
        </div>
    )
}

export default SolanaWalletBox;