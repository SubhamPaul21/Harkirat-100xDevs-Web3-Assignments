import './App.css';
import PhraseBox from './components/PhraseBox';
import generateSeedPhraseList from './utils/generateSeedPhrase';
import { Buffer } from 'buffer';

function App() {

  window.Buffer = Buffer;

  const seedPhraseList = generateSeedPhraseList();
  let seedPhraseKey = 0;

  return (
    <>
      <h2>Create Ethereum and Solana Wallets by Generating a Seed Phrase</h2>
      <div className="seed-phrase-box">
        {
          seedPhraseList.map(seedPhrase => (
            <PhraseBox phrase={seedPhrase} key={seedPhraseKey++} />
          ))
        }
      </div>
    </>
  )
}

export default App
