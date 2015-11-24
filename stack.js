function Stack() {
    this.myarray = [];
}
Stack.prototype.push = function(x) {
    this.myarray.push(x);
}
Stack.prototype.pop = function() {
    return this.myarray.pop();
}
Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}
Stack.prototype.isEmpty = function() {
    return this.myarray.length == 0;
}

function decToBin(dec) {
    this.dec=10;
    var binStack = new Stack();
    var ris = dec;
    var res = 0;
    var string = '';
    while(ris > 0) {
        res = ris % 2;
        ris = Math.floor(ris / 2);
        binStack.push(res);
    }
    while(!binStack.isEmpty()) {
        string += binStack.pop().toString();
    }
    return console.log(string);

}

decToBin(5);