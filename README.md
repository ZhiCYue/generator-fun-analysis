## generator 函数原理

babel 转换 generator 方法时，需要使用 transform-runtime 插件<br/>
dist 目录是缩小版的 gennerator 函数转换后的代码

```js
function* interator() {
  const a = yield '23'
  console.log(a)
}

var gen = interator()
console.log(gen.next())
```

#### 执行：
```js
node dist/index.js
{ value: '23', done: false }
```
