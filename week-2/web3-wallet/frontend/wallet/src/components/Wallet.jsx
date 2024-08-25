import PrivateKey from './PrivateKey';
import '../App.css';
import PublicKey from './PublicKey';

const Wallet = ({ privateKey, publicKey }) => {
    return (
        <div id="individual-wallet">
            <span style={{ textAlign: 'left', marginBottom: '10px' }}>Private Key:</span>
            <PrivateKey privateKey={privateKey} />
            <span style={{ textAlign: 'left', marginBottom: '10px', marginTop: '10px' }}>Public Key:</span>
            <PublicKey publicKey={publicKey} />
        </div>
    )
}

export default Wallet;