let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
//数组里使用...语法创建剩余变量
let [first2, ...rest] = [1, 2, 3, 4];
console.log(first2); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

//忽略不关心的尾随元素
let [first3] = [1, 2, 3, 4];
console.log(first3); // outputs 1
//或其它元素
let [, second2, , fourth] = [1, 2, 3, 4];

// 解构对象：
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;

//在对象里使用...语法创建剩余变量
let o2 = {
    a2: "foo",
    b2: 12,
    c2: "bar"
};
let { a2, ...passthrough } = o2;
let total = passthrough.b2 + passthrough.c2.length;

//属性重命名
let o3 = {
    a3: "foo",
    b3: 12,
    c3: "bar"
};
let { a3: newName1, b3: newName2 } = o3;

// 想指定它的类型， 仍然需要在其后写上完整的模式
let {a3, b3}: {a3: string, b3: number} = o3;

//默认值
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}


//展开
let first4 = [1, 2];
let second4 = [3, 4];
let bothPlus = [0, ...first4, ...second4, 5];

//展开对象   注意： defaults里的food属性会被重写food: "rich" ;  反之： {food: "rich", ...defaults  }
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };


class C {
    p = 12;
    m() {
    }
  }
  let c = new C();
  let clone = { ...c };
  clone.p; // ok
  //clone.m(); // error!  类型“{ p: number; }”上不存在属性“m”。