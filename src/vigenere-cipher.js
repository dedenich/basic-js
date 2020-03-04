class VigenereCipheringMachine {
    constructor(direction = true) {
        this.direction = direction;

    }

    encrypt(message, key) {
        return this._basicEncryption(message, key, 'encrypt');
    }

    decrypt(encryptedMessage, key) {
        return this._basicEncryption(encryptedMessage, key, 'decrypt');
    }

    _basicEncryption(message, key, method) {
        if (!message || !key) throw Error;

        const alphabetPositionStart = 65;
        const alphabetPositionEnd = 90;
        const alphabetLength = 26;

        let upperMessage = message.toUpperCase();
        let upperKey = key.toUpperCase();
        let resultArr = [];
        let posForKey = 0

        for (let i = 0; i < upperMessage.length; i++) {
            let letterCode = upperMessage[i].codePointAt(0);

            if (letterCode < alphabetPositionStart || letterCode > alphabetPositionEnd) {
                resultArr.push(upperMessage[i]);
            } else {
                let keyPos = posForKey % key.length;
                let dif = upperKey[keyPos].codePointAt(0) - alphabetPositionStart;
                let letterCode = upperMessage[i].codePointAt(0);
                let letterDifCode, newLetterCode;

                if (method === 'encrypt') {
                    letterDifCode = letterCode + dif;
                    newLetterCode = letterDifCode > alphabetPositionEnd
                                    ? letterDifCode - alphabetLength
                                    : letterDifCode;
                } else if (method === 'decrypt') {
                    letterDifCode = letterCode - dif;
                    newLetterCode = letterDifCode < alphabetPositionStart
                                    ? letterDifCode + alphabetLength
                                    : letterDifCode;
                } else {
                    throw Error;
                }

                let newLetter = String.fromCodePoint(newLetterCode);
    
                resultArr.push(newLetter);
                posForKey++;
            }
        }

        return this.direction ? resultArr.join('') : resultArr.reverse().join('');
    }

}


module.exports = VigenereCipheringMachine;
