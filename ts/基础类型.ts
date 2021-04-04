//1.TS声明的基本数据类型

//1.1string 明确数据类型为String
let str1:string ="1";
console.log(str1);
let name1: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name1 }.
I'll be ${ age + 1 } years old next month.`;

console.log(sentence);


//1.2数字 number 明确数据类型为number
let num1:number = 1; 
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
console.log(num1);

//1.3布尔
let bool:boolean = true;
console.log(bool);
//1.4数组
let arr:string []=["a","a2"]
let numberList: number[] = [1, 2, 3];
console.log(arr)

//1.5不声明具体数据类型 由代码推断出数据类型
let str2 = "aaaa";
console.log(str2);
let num2 = 2;
console.log(num2)

//1.6函数明确类型
function funcA():void {
    //不返回任何
    console.log("a()");
}
funcA()

//明确返回类型 number
function funcB():number{
    return 1;
}

let u: undefined = undefined;
let n: null = null;

//Object类型  object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

//2.0类型断言
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

//另一个为as语法：
let someValue2: any = "this is a string";

let strLength2: number = (someValue as string).length;



