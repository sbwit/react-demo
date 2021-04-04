interface IUser{
    name:string
}

class Tom implements IUser{
    name:string
    constructor(name:string) {
        this.name = name;
    }
}
class Jim implements IUser {
    name:string
    constructor(name:string) {
        this.name = name;
    }
}
class Teacher{
    user:IUser
    callUserName() {
        console.log(this.user.name)
    }
}
let t = new Tom("tom");
let j = new Jim("jim");
let teacher = new Teacher();
teacher.user = t;
teacher.callUserName();
teacher.user = j;
teacher.callUserName();