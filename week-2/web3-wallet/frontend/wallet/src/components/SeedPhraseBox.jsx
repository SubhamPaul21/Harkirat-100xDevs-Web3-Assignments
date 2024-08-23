import PhraseBox from './PhraseBox';
import generateSeedPhraseList from '../utils/generateSeedPhrase';
import { Buffer } from 'buffer';

export default function SeedPhraseBox() {
    window.Buffer = Buffer;
    const seedPhraseList = generateSeedPhraseList();
    let seedPhraseKey = 0;

    return (
        <div className="seed-phrase-box">
            <h2 style={{ margin: 0 }}>Secret Recovery Phrase</h2>
            <div className="seed-phrase-div">
                {
                    seedPhraseList.map(seedPhrase => (
                        <PhraseBox phrase={seedPhrase} key={seedPhraseKey++} />
                    ))
                }
            </div>
        </div>
    )
}