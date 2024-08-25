import DisplayPrivateKey from './DisplayPrivateKey';

const Wallet = () => {
    return (
        <div id="individual-wallet">
            <span style={{ textAlign: 'left', marginBottom: '10px' }}>Private Key:</span>
            <DisplayPrivateKey privateKey={"e9873d79c6d87dc0fb6a5778633389f4453213303b0d0e4b82a6a40afde5f9b8"} />
        </div>
    )
}

export default Wallet;