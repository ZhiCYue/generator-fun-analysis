function* interator() {
    const a = yield '23'
    console.log(a) // 2
}

var gen = interator()
console.log(gen.next()) // { value: '23', done: false }
gen.next(2)