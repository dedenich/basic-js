const chainMaker = {
  chain: [], 
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments === 0){
      this.chain.push("( )");
      }else{
        this.chain.push("( " +value+ " )");
      }
    return this;
  },
  removeLink(position) {
     if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain.length = 0;
      throw Error;
    }

    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    let newArr = this.chain.join('~~');
    this.chain.length = 0;

    return newArr;
  }
};

module.exports = chainMaker;
