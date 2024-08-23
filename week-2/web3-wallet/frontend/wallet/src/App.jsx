import './App.css'
import PhraseBox from './components/PhraseBox'

function App() {

  return (
    <>
      <h2>Create Ethereum and Solana Wallets by Generating a Seed Phrase</h2>
      <div className="seed-phrase-box">
        <PhraseBox />
      </div>
    </>
  )
}

export default App
