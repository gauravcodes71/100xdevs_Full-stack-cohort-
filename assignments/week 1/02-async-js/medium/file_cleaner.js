const fs = require('fs');

// Function to remove extra spaces from a string
function removeExtraSpaces(data) {
    return data.replace(/\s+/g, ' ').trim();
}

// Function to read the file, remove extra spaces, and write back to the same file
function cleanFile(filePath) {
    fs.readFile('a.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const cleanedData = removeExtraSpaces(data);

        fs.writeFile('a.txt', cleanedData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('File cleaned successfully!');
        });
    });
}

// Usage: Pass the file path to the function
cleanFile('a.txt'); // Replace 'example.txt' with the path to your file
