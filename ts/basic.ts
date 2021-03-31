//TS 声明的基本数据

//string 明确数据类型为String
let str1:string ="1";
console.log(str1);
// number 明确数据类型为number
let num1:number = 1; 
console.log(num1);
//布尔
let bool:boolean = true;
console.log(bool);
//数组
let arr:string []=["a","a2"]
console.log(arr)

//不声明具体数据类型 由代码推断出数据类型
let str2 = "aaaa";
console.log(str2);
let num2 = 2;
console.log(num2)

//函数明确类型
function funcA():void {
    //不返回任何
    console.log("a()");
}
funcA()

//明确返回类型 number
function funcB():number{
    return 1;
}

//null 
//undefined
