function* interator() {
    const a = yield '23'
    console.log(a)
}

var gen = interator()
console.log(gen.next()) // { value: '23', done: false }
