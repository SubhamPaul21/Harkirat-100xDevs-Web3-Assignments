import { useState } from 'react';
import '../App.css';
import Wallet from './Wallet.jsx';
import { generateSeedFromMnemonic, generateEthereumKeyPair } from "../utils/cryptoWallet.js";

const EthereumWalletBox = ({ mnemonic }) => {
    const [EthereumWalletIndex, setEthereumWalletIndex] = useState(1);
    const [EthereumWallets, setEthereumWallets] = useState([]);

    const seed = generateSeedFromMnemonic(mnemonic);

    const createEthereumWallet = () => {
        const [privateKey, publicKey] = generateEthereumKeyPair(seed, EthereumWalletIndex);
        const newEthereumWallet = <Wallet privateKey={privateKey} publicKey={publicKey} walletIndex={EthereumWalletIndex} key={EthereumWalletIndex} />;
        setEthereumWallets([...EthereumWallets, newEthereumWallet]);
        setEthereumWalletIndex(EthereumWalletIndex + 1);
    }

    return (
        <div id="wallet-box">
            <h3 id="wallet-name">Ethereum Wallets</h3>
            <button id='create-wallet-btn' onClick={createEthereumWallet}>Create ETH wallet</button>
            <div id='wallet-list'>
                {EthereumWallets}
            </div>
        </div>
    )
}

export default EthereumWalletBox;