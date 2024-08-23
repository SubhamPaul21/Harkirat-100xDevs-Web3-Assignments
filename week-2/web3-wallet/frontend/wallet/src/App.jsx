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
      <h1>Create Ethereum and Solana Wallets by Generating a Seed Phrase</h1>
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
    </>
  )
}

export default App
