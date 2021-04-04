class Sbwit {
  name: string;
  age: number;
  say() {
    console.log(this.name + "  " + this.age);
  }
}
let l = new Sbwit();
l.name = "subowen";
l.age = 30;
l.say();
//================================
//泛型只是关注于我主要的数据，我不关注数据格式
interface IUser {
  name: string;
  age: number;
}

interface IBOOK {
  name: string;
  remake: string;
}

class Sbwit11<TESTTTTT = {}> {
  user: TESTTTTT;
  say() {
    console.log("====================");
    console.log(this.user);
  }
}

let sbwit = new Sbwit11<IUser>();
sbwit.user = { name: "testname", age: 18 };
sbwit.say();

//多个参数泛型
class Sbwit222<TESTTTTT = {}, Test3333 = {}> {
  user: TESTTTTT;
  book: Test3333;
  say() {
    console.log("2222222222222222222222");
    console.log(this.user);
    console.log(this.book);
  }
}

let sbwit2 = new Sbwit222<IUser, IBOOK>();
sbwit2.user = { name: "testname", age: 18 };
sbwit2.book = { name: "testBook", remake: "testRemake" };
sbwit2.say();
//================================================
//接收任何类型的arg参数，
function identity(arg: any): any {
  return arg;
}
//添加了类型变量T。 T帮助我们捕获用户传入的类型,再次使用了 T当做返回值类型
function identity2<T>(arg: T): T {
  return arg;
}
let output = identity2<string>("类型变量T:myString");
console.log(output);
//注意我们没必要使用尖括号（<>）来明确地传入类型；编译器可以查看myString的值，然后把T设置为它的类型。
let output2 = identity2("类型推论帮助我们保持代码精简和高可读性:myString");
console.log(output2);
//================================================

//使用泛型变量
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
function loggingIdentity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
//================================================
// 泛型类型
function identity3<T>(arg: T): T {
  return arg;
}

let myIdentity: <T>(arg: T) => T = identity3;
//也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
let myIdentity2: <U>(arg: U) => U = identity3;
//================================================

// 泛型接口
interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity4<T>(arg: T): T {
  return arg;
}

let myIdentity3: GenericIdentityFn = identity4;
//还可以写成这样
interface GenericIdentityFn2<T> {
  (arg: T): T;
}

function identity5<T>(arg: T): T {
  return arg;
}

let myIdentity4: GenericIdentityFn2<number> = identity5;
//================================================
// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
//number
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
console.log(myGenericNumber.add(33, 44));
//String
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};
console.log(stringNumeric.add("33", "44"));

//==================================
// 在泛型约束中使用类型参数
function getProperty(obj: Object, key: string) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
console.log(getProperty(x, "a"));
console.log(getProperty(x, "m"));
//==================================
// 在泛型里使用类类型
//一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal7 {
  numLegs: number;
}

class Bee extends Animal7 {
  keeper: BeeKeeper;
}

class Lion extends Animal7 {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal7>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
