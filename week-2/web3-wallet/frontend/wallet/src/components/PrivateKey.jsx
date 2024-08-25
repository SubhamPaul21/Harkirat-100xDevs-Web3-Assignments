import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const PrivateKey = ({ privateKey }) => {
    const [isPrivateKeyVisible, setIsPrivateKeyVisible] = useState(false);
    const hiddenPrivateKeyString = "***********************************************************";

    const togglePrivateKeyVisibility = () => {
        setIsPrivateKeyVisible(!isPrivateKeyVisible);
    }

    return (
        <div id='private-key-div'>
            <div id="key-display-div">
                <span id='key-span-text'>{isPrivateKeyVisible ? privateKey : hiddenPrivateKeyString}</span>
            </div>
            <FontAwesomeIcon id="eye-icon"
                icon={isPrivateKeyVisible ? faEye : faEyeSlash}
                onClick={togglePrivateKeyVisibility}
            />
        </div>

    );
}

export default PrivateKey;