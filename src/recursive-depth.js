module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) {
            return 0;
        }else if (Array.isArray(arr) && arr.length === 0)
            return 1;
        
            return 1 + Math.max.apply(null, arr.map(e => this.calculateDepth(e)));
    }
};