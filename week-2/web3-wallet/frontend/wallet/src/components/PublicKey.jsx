import '../App.css';

const PublicKey = ({ publicKey }) => {
    return (
        <div id="key-display-div">
            <span id='key-span-text'>{publicKey}</span>
        </div>
    );
}

export default PublicKey;