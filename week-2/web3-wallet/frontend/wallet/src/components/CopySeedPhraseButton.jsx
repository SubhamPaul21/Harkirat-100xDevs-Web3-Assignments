import { useState } from "react";

const CopySeedPhraseButton = ({ seedPhraseList }) => {
    const [copied, setCopied] = useState(false);
    const seedPhrasesToCopy = seedPhraseList.join('\n');

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(seedPhrasesToCopy);
            setCopied(true);
        } catch (err) {
            console.error("Failed to Copy: ", err);
        }
    };

    return (
        <>
            <button onClick={handleCopy}>
                {
                    copied ? "Copied!" : "Copy Seed Phrases"
                }
            </button>
        </>
    );
};

export default CopySeedPhraseButton;