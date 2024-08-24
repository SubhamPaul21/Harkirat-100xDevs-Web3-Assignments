import '../App.css';
import PhraseBox from './PhraseBox';
import generateSeedPhraseList from '../utils/generateSeedPhrase';
import { Buffer } from 'buffer';
import CopySeedPhraseButton from './CopySeedPhraseButton';

export default function SeedPhraseBox() {
    window.Buffer = Buffer;
    const seedPhraseList = generateSeedPhraseList();

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