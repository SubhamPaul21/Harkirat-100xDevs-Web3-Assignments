import { generateMnemonic } from "bip39";

function generateSeedPhraseList() {
    const mnemonic = generateMnemonic();
    const seedPhrases = mnemonic.split(" ");
    return seedPhrases;
}

export default generateSeedPhraseList;