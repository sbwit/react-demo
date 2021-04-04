//简单函数
// Named function
function add(x, y) {
  return x + y;
}

// Anonymous function
let myAdd = function (x, y) {
  return x + y;
};
console.log(myAdd(1, 3));

let z = 100;
function addToZ(x, y) {
  return x + y + z;
}
console.log(addToZ(4, 56));
//====================================================

//为函数定义类型
function add2(x: number, y: number): number {
  return x + y;
}

let myAdd2 = function (x: number, y: number): number {
  return x + y;
};
console.log("为函数定义类型:" + myAdd2(4, 3));
//====================================================

// 函数的完整类型
// 函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。
// 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性。 我们也可以这么写：
let myAdd3: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
let myAdd4: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
// 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。

//====================================================
// 推断类型
// myAdd has the full function type
let myAdd5 = function (x: number, y: number): number {
  return x + y;
};

// The parameters `x` and `y` have the type number
let myAdd6: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};

//====================================================
// 可选参数和默认参数
function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams"); // ah, just right
//====================================================
function buildName2(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

let result4 = buildName2("Bob"); // works correctly now
// let result5 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
let result6 = buildName2("Bob", "Adams"); // ah, just right
//====================================================
//函数默认值
function buildName3(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

let result7 = buildName3("Bob"); // works correctly now, returns "Bob Smith"
let result8 = buildName3("Bob", undefined); // still works, also returns "Bob Smith"
// let result9 = buildName3("Bob", "Adams", "Sr.");  // error, too many parameters
let result10 = buildName3("Bob", "Adams"); // ah, just right.

//====================================================
// 剩余参数
function buildName4(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");

//====================================================
// this和箭头函数
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

