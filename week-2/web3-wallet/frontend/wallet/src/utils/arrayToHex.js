const arrayToHex = (byteArray) => {
    let hexString = "";
    byteArray.map(byte => {
        hexString += byte.toString(16).padStart(2, "0");
    });
    return hexString
}

export default arrayToHex;