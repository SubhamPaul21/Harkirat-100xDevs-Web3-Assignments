import PrivateKey from './PrivateKey';
import '../App.css';
import PublicKey from './PublicKey';
import Balance from './Balance';

const Wallet = ({ privateKey, publicKey, walletIndex }) => {
    return (
        <div id="individual-wallet">
            <span style={{ marginBottom: '10px', fontWeight: 'bold' }}>Wallet No. {walletIndex}</span>
            <span style={{ textAlign: 'left', marginBottom: '10px' }}>Private Key:</span>
            <PrivateKey privateKey={privateKey} />
            <span style={{ textAlign: 'left', marginBottom: '10px', marginTop: '10px' }}>Public Key:</span>
            <PublicKey publicKey={publicKey} />
            <Balance publicKey={publicKey} />
        </div>
    )
}

export default Wallet;