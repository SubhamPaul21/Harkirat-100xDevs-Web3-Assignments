import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import arrayToHex from "./arrayToHex.js";
import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";
import { bytesToHex } from "ethereum-cryptography/utils";

const alchemyApiKey = import.meta.env.VITE_ALCHEMY_RPC_API_KEY;
const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
};

export const getMnemonic = () => {
    return generateMnemonic();
}

export const generateSeedPhraseList = (mnemonic) => {
    const seedPhrases = mnemonic.split(" ");
    return seedPhrases;
}

export const generateSeedFromMnemonic = (mnemonic) => {
    return mnemonicToSeedSync(mnemonic);
}

export const generateSolanaKeyPair = (seed, accountIndex) => {
    const path = `m/44'/501'/${accountIndex}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const privateKey = arrayToHex(secret.slice(0, 32));
    const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();
    return [privateKey, publicKey];
}

export const generateEthereumKeyPair = (seed, accountIndex) => {
    const path = `m/44'/60'/${accountIndex}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const privateKey = arrayToHex(derivedSeed.subarray(0, 32));
    const publicKey = secp256k1.getPublicKey(privateKey, false).slice(1);
    const address = `0x${bytesToHex(keccak256(publicKey).subarray(-20))}`;
    return [`0x${privateKey}`, address];
}

export const getEthereumWalletBalance = async (publicKey) => {
    const url = `https://eth-mainnet.g.alchemy.com/v2/${alchemyApiKey}`;
    const body = JSON.stringify({
        id: 1,
        jsonrpc: "2.0",
        method: "eth_getBalance",
        params: [publicKey, "latest"],
    });

    try {
        const response = await fetch(url, {
            "method": "POST",
            "headers": headers,
            "body": body
        });

        const data = await response.json();
        const result = data.result;
        const balanceInDecimal = BigInt(result).toString();
        const ethBalance = balanceInDecimal / (10 ** 18);
        return ethBalance;
    } catch (err) {
        console.log("Error while getting Ethereum Wallet Balance: ", err);
        return 0;
    }
}

export const getSolanaWalletBalance = async (publicKey) => {
    const url = `https://solana-mainnet.g.alchemy.com/v2/${alchemyApiKey}`;
    const body = JSON.stringify({
        id: 1,
        jsonrpc: "2.0",
        method: "getBalance",
        params: [publicKey],
    });

    try {
        const response = await fetch(url, {
            "method": "POST",
            "headers": headers,
            "body": body
        });

        const data = await response.json();
        const result = data.result.value;
        const balanceInDecimal = BigInt(result).toString();
        const solBalance = balanceInDecimal / (10 ** 9);
        return solBalance;
    } catch (err) {
        console.log("Error while getting Solana Wallet Balance: ", err);
        return 0;
    }
}