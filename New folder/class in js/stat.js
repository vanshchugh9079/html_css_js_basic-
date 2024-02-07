class user
{
 constructor(username){
    this.username=username

 }
 logme(){
    console.log(`username ${this.username}`);
 }
 static createId(){
    return  `123`
 }
}
const vansh=new user("vansh")
console.log(vansh.createId());