module.exports = function repeater(str, options) {
    
        let additionStr;
        
        if (options.addition !== undefined) {
            let additionRepeatTimes = options.additionRepeatTimes || 1;
            let additionArr = Array(additionRepeatTimes).fill(String(options.addition));
            let additionSeparator = options.additionSeparator || '|';
            additionStr = additionArr.join(additionSeparator);
        }
    
        let repeatTimes = options.repeatTimes || 1;
        let fillArr = additionStr ? String(str) + additionStr : String(str);
        let arr = Array(repeatTimes).fill(fillArr);
        let separator = options.separator || '+';
    
        return arr.join(separator);
};
  