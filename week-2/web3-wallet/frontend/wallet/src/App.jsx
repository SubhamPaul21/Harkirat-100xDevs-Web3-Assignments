import SeedPhraseBox from './components/SeedPhraseBox';
import WalletBox from './components/WalletBox';

function App() {

  return (
    <>
      <h1>Create Ethereum and Solana Wallets by Generating a Seed Phrase</h1>
      <SeedPhraseBox />
      <div className="wallet-div">
        <WalletBox name={"Solana Wallets"} />
        <WalletBox name={"Ethereum Wallets"} />
      </div>
    </>
  )
}

export default App
