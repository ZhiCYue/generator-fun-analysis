var iteratorSymbol = Symbol.iterator;

var arr = [];
var iteratorMethod = arr[iteratorSymbol];
if (iteratorMethod) {
    var res = iteratorMethod.call(arr);
    console.log(res.next()); // { value: undefined, done: true }
}
