const iterable = {
    [Symbol.iterator]() {
        return {
            i: 0,
            next() {
                if (this.i < 3) {
                    return { value: this.i++, done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
};

for (const value of iterable) {
    console.log(value);
}
// 0
// 1
// 2
