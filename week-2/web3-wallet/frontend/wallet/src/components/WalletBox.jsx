import '../App.css';

const WalletBox = ({ name }) => {
    return (
        <div id="wallet-box">
            <h3 id="wallet-name">{name} Wallets</h3>
            {
                name.toLowerCase() == "solana"
                    ? <button id='create-wallet-btn'>Create SOL wallet</button>
                    : <button id='create-wallet-btn'>Create ETH wallet</button>
            }
        </div>
    )
}

export default WalletBox;