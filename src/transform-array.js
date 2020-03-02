module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error;
    if (arr.length === 0) return arr;
    let resArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!/^--/.test(arr[i])) {
            resArr.push(arr[i]);
        } else {
            switch (arr[i]) {
                case "--discard-next":
                    i++;
                    break;
                case "--discard-prev":
                    if(resArr.length > 0) resArr.pop();
                    break;
                case "--double-next":
                    if (arr.length > i + 1) resArr.push(arr[i + 1]);
                    break;
                case "--double-prev":
                    if(i >= 1) resArr.push(arr[i - 1]);
                    break;
            }
        }
    }
    return resArr;
};
