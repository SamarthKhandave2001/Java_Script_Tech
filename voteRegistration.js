let UserAge = 20;
let isCitizen = true;
let isRegistered = true;
if(UserAge >= 18){
    if(isCitizen){
        if(isRegistered){
            console.log("You are eligible to vote.");
        } else {
            console.log("You need to register to vote.");
        }
    } else {
        console.log("You must be a citizen to vote.");
    
    }
}