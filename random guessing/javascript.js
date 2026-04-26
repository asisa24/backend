const max = 100;
const min = 1;
let attempts = 0;
let Num 
let maxAttempts
let guess

function easy() {
    document.getElementById("answer").innerHTML = `game started, you have 3 attempts`;
    attempts = 0;
    maxAttempts = 10;
    Num = Math.floor(Math.random() *100) +1;
}
function Submit() {
    guess = parseInt(document.getElementById("try").value);
    let text = document.getElementById("answer");
    attempts++;
    if (attempts < maxAttempts) {
        if (guess === Num) {
            text.innerHTML = `Correct! you got it in ${attempts} attempts` ;
            return;           
        } else if (guess > Num) {
            text.innerHTML = `too high, ${maxAttempts-attempts} left`;
        }else{
            text.innerHTML =`too low, ${maxAttempts-attempts} left`;
        }  
    } 
    if (attempts >= maxAttempts) {
        text.innerHTML= `Out of attempts, try again`; 
    }
}