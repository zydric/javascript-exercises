const palindromes = function (words) {
    const filtered = words.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    const reversed = filtered.split('').reverse().join('');
    return filtered === reversed;
};

// Do not edit below this line
module.exports = palindromes;
