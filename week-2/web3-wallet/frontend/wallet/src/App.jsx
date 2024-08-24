import SeedPhraseBox from './components/SeedPhraseBox';
import WalletBox from './components/WalletBox';

const App = () => {

  return (
    <>
      <h1>Create Ethereum and Solana Wallets by Generating a Seed Phrase</h1>
      <SeedPhraseBox />
      <div id="wallet-div">
        <WalletBox name={"Solana"} />
        <WalletBox name={"Ethereum"} />
      </div>
    </>
  )
}

export default App;
