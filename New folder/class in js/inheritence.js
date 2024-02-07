class user
{
 constructor(username){
    this.username=username

 }
 logme(){
   return this.username
 }
}
class teacher extends user
{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addcourse(){
        console.log(this.username);
    }
}
let teach=new teacher("chai","chughv9079","password")
console.log(teach.logme());
teach.addcourse()
console.log(teach instanceof teacher);
console.log(teach instanceof user);