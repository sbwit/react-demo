//接口的声明
interface Lee {

}
//接口必选的成员变量
interface Lee1{
    age:number 
}
//接口可选的成员变量 可以有 也可以没有
interface Lee2 {
    name?:string
}
//稍微复杂接口
interface Lee3{
    name2:string
    age:number
    say:()=>void
    userList:string[]
}
//接口继承
interface Lee4 extends Lee3 ,Lee2{

}
//====================
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape , PenStroke{
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;


/*
 function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);
*/
//使用接口来描述：必须包含一个label属性且类型为string
interface LabelledValue {
    label: string;
  }
  
  function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
  }
  
  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);

  //============================

  //可选属性  带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号
  //可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。
  interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
  let mySquare = createSquare({color: "black"});


//   只读属性  属性名前用 readonly来指定只读属性:
interface Point {
    readonly x: number;
    readonly y: number;
}
//ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
let a5: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a5;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
//可索引的类型
interface StringArray {
    [index: number]: string;
  }
  
  let myArray: StringArray;
  myArray = ["Bob", "Fred"];
  
  let myStr: string = myArray[0];

//   可以将索引签名设置为只读，这样就防止了给索引赋值
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[2] = "Mallory"; // error!



//函数类型 像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
interface SearchFunc {
    (source: string, subString: string): boolean;
  }

//   如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}