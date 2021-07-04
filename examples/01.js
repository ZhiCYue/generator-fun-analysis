// https://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html

function Animal(){
　　this.species = "动物";
}

function Cat(name,color){
    this.name = name;
    this.color = color;
}

// 其中实现 Cat 继承 Animal

/**
 * 方式一： 直接继承原型
 * 弊端：
 * 1. 修改 Cat.prototype 时，同时会修改 Animal.prototype;
 * 2. 继承的属性，需要在基类的原型上
 */
function Animal(){ }
Animal.prototype.species = "动物";

Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); // 动物


// 这种方式，可以类比 Generator（Animal） 和 GeneratorFunctionPrototype（Cat） 之间的继承方式
