import SeedPhraseBox from './components/SeedPhraseBox';
import SolanaWalletBox from './components/SolanaWalletBox';
import EthereumWalletBox from './components/EthereumWalletBox';
import { useState } from 'react';
import { Buffer } from 'buffer';
import { getMnemonic } from './utils/cryptoWallet.js';

const App = () => {
  window.Buffer = Buffer;
  const [mnemonic] = useState(getMnemonic());

  return (
    <>
      <h1>Create Ethereum and Solana Wallets by Generating a Seed Phrase</h1>
      <SeedPhraseBox mnemonic={mnemonic} />
      <div id="wallet-div">
        <div>
          <SolanaWalletBox mnemonic={mnemonic} />
        </div>
        <div>
          <EthereumWalletBox />

        </div>
      </div>
    </>
  )
}

export default App;
