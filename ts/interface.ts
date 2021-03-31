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

