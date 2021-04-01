class Sbwit {
    name:string
    age:number
    say() {
        console.log(this.name + "  " + this.age)
    }
}
let l = new Sbwit();
l.name = "subowen";
l.age = 30;
l.say();
//================================
//泛型只是关注于我主要的数据，我不关注数据格式
interface IUser{
    name:string
    age:number
}

interface IBOOK{
    name:string
    remake:string
}

class Sbwit11<TESTTTTT={}>{
    user:TESTTTTT
    say(){
        console.log("====================")
        console.log(this.user)
    }
}

let sbwit = new Sbwit11<IUser>();
sbwit.user = {name:"testname",age:18}
sbwit.say();

//多个参数泛型
class Sbwit222<TESTTTTT={},Test3333={}>{
    user:TESTTTTT
    book:Test3333
    say(){
        console.log("2222222222222222222222")
        console.log(this.user)
        console.log(this.book)
    }
}



let sbwit2 = new Sbwit222<IUser,IBOOK>();
sbwit2.user = {name:"testname",age:18}
sbwit2.book = {name:"testBook",remake:"testRemake"}
sbwit2.say();
