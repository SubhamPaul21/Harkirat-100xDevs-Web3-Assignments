import SeedPhraseBox from './components/SeedPhraseBox';
import SolanaWalletBox from './components/SolanaWalletBox';
import EthereumWalletBox from './components/EthereumWalletBox';

const App = () => {

  return (
    <>
      <h1>Create Ethereum and Solana Wallets by Generating a Seed Phrase</h1>
      <SeedPhraseBox />
      <div id="wallet-div">
        <SolanaWalletBox />
        <EthereumWalletBox />
      </div>
    </>
  )
}

export default App;
