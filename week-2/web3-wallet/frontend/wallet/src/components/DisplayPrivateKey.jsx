const DisplayPrivateKey = ({ privateKey }) => {
    return (
        <div id="private-key-display-div">
            <span id='private-key-span-text'>{privateKey}</span>
        </div>
    );
}

export default DisplayPrivateKey;