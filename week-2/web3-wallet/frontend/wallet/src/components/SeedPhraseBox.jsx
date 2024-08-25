import '../App.css';
import PhraseBox from './PhraseBox';
import { generateSeedPhraseList } from "../utils/cryptoWallet.js";
import CopySeedPhraseButton from './CopySeedPhraseButton';

const SeedPhraseBox = ({ mnemonic }) => {

    const seedPhraseList = generateSeedPhraseList(mnemonic);

    return (
        <div id="seed-phrase-box">
            <div id="seed-phrase-text-button-div">
                <h2 id="seed-phrase-text">Secret Recovery Phrase</h2>
                <CopySeedPhraseButton seedPhraseList={seedPhraseList} />
            </div>
            <div id="seed-phrase-div">
                {
                    seedPhraseList.map((seedPhrase, index) => (
                        <PhraseBox phrase={seedPhrase} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default SeedPhraseBox;