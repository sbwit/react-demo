class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello," + this.greeting;
  }
}
let greeter = new Greeter("World");
console.log("1.类的第一个认识示例：" + greeter.greet());

//==================================================
//2.继承
class Animal {
  move(distanceInmeters: number = 0) {
    console.log(`2.继承:Animal moved ${distanceInmeters}m.`);
  }
}
class Dog extends Animal {
  bark() {
    console.log("2.继承:Woof! Woof!");
  }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
dog.move(20);
//===
// 2.1继承 更加复杂例子
class Animal2 {
    name:string ;
    constructor (theName:string) {this.name = theName}
    move(distanceInmeters:number = 0){
        console.log(`${this.name} moved ${distanceInmeters}m.`)
    }
}
class Snake extends Animal2 {
    constructor(name:string) {
        super(name);
    }
    move(distanceInmeters =5) {
        console.log("2.1继承: Slithering .....")
        super.move(distanceInmeters)
    }
}
class Horse extends Animal2 {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("2.1继承:  Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("2.1继承: Sammy the Pathon");
let tom:Animal2  = new Horse("2.1继承: Tommy the Palomino");
sam.move();
tom.move(24)



//3.公共，私有与受保护的修饰符
//3.1默认为 public
class Animal3 {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
// 3.理解 private
class Animal4 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

//new Animal4("Cat").name; // 错误:属性“name”为私有属性，只能在类“Animal4”中访问。

// 3.1 理解 protected
// 3.1 readonly修饰符.
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.


//4. 存取器
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "4. 存取器 Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

//5. 静态属性
//6. 抽象类
abstract class Animal6 {
    abstract makeSound(): void;
    move(): void {
        console.log('6. 抽象类: roaming the earch...');
    }
}
//================================
//6.1 抽象类复杂的例子
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('6.1 抽象类复杂的例子：Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('6.1 抽象类复杂的例子：Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('6.1 抽象类复杂的例子：The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('6.1 抽象类复杂的例子：Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在

// 7. 高级技巧 构造函数
class Greeter2 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "7. 高级技巧 构造函数：Hello, " + this.greeting;
    }
}
//let greeter2: Greeter2，意思是 Greeter2类的实例的类型是 Greeter2。
let greeter2: Greeter2;
greeter2 = new Greeter("world");
console.log(greeter2.greet());
//=====================================================================

// 7.1 构造函数复杂的栗子
class Greeter3 {
    static standardGreeting = "7.1 构造函数复杂的栗子: Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "7.1 构造函数复杂的栗子：Hello, " + this.greeting;
        }
        else {
            return Greeter3.standardGreeting;
        }
    }
}

let greeter3: Greeter3;
greeter3 = new Greeter3();
console.log(greeter3.greet());
//使用 typeof Greeter3，意思是取Greeter3类的类型，而不是实例的类型. 或者更确切的说，"告诉我 Greeter3标识符的类型"，也就是构造函数的类型。
let greeterMaker: typeof Greeter3 = Greeter3;
greeterMaker.standardGreeting = "Hey there!";

let greeter4: Greeter3 = new greeterMaker();
console.log(greeter4.greet());