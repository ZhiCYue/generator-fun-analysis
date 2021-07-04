
var A = function() {this.name = 'a'}
var B = function() {this.name = 'b'}
var C = function() {this.name = 'c', this.age = 12}

A.prototype = C;
C.constructor = A;

var x = new A();
// x.name === 'C'
