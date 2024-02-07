try {
    let age=prompt("eneter your age")
    if(age<18){
        throw new Error("invalid age")
    }
    else{
        console.log("you are adult");
    }
} catch (error) {
    // console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
}