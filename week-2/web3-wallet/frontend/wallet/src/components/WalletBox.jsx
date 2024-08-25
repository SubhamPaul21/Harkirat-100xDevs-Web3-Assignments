import '../App.css';
import Wallet from './Wallet';

const WalletBox = ({ name }) => {
    return (
        <div id="wallet-box">
            <h3 id="wallet-name">{name} Wallets</h3>
            {
                name.toLowerCase() == "solana"
                    ? <button id='create-wallet-btn'>Create SOL wallet</button>
                    : <button id='create-wallet-btn'>Create ETH wallet</button>
            }
            <Wallet privateKey={"e9873d79c6d87dc0fb6a5778633389f4453213303b0d0e4b82a6a40afde5f9b8"} publicKey={"04bfcab21370e2e4d79813f5c77c9b32e62d13b1245db9c908a2f29ab4b4ed44f5e1c3c9f3547ec6b0c86c6c4f12bcf317f4183dd6a1e9d9ed104aa9a4e94620f7"} />
        </div>
    )
}

export default WalletBox;