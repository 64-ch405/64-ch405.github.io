// Function to generate a random binary string of specified length
function generateRandomBinaryString(length) {
    let binaryString = '';
    for (let i = 0; i < length; i++) {
        binaryString += Math.round(Math.random()).toString();
    }
    return binaryString;
}

// Function to update the document title
function updateTitle() {
    const randomBinaryStream = generateRandomBinaryString(64); // 8 bytes (64 bits)
    document.title = `Binary Chaos [${randomBinaryStream}]`;
}

// Set the initial title and update it every few seconds
updateTitle();
setInterval(updateTitle, 750);
