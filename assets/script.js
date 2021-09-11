// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var charSet = [];
var password=[];
var passwordLen;

function main(){
    password=[];
    charSet=[];
    critera();
   
   genPassword();
    //shows password generation is complete
    alert(`your password is : ${password.join("")}`)
};
// generates character sets 

// basically creates python function RandRange()
function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
} 
//gets critera from user
function critera(){
    var upper_Case_Letters=("Upper Case");
    var lower_Case_Letters=("Lower Case");
    var symbols=("Symbols");
    var numbers=("Numbers");
    

    let setList= [upper_Case_Letters,lower_Case_Letters, symbols, numbers];
    
    function convertToBoo(array){
        for(let i = 0; i<=array.length-1;i++ ){
            array[i]=prompt(`${array[i]} Y or N?`);
            
            
            
            
        while(typeof array[i]==="string"){
            
       if(array[i]=='Y' || array[i]=='y'){
           array[i]=true;
           
       }
      else if(array[i]=='N' || array[i]=='n'){
        array[i]=false;
        
    }
        else{
            array[i]=prompt('Please Enter Y or N')
            console.log("still in loop");
        }
        
    }
   
}
    }
    convertToBoo(setList);
    function getLen(){
        let userInput= prompt("Enter length of password, Must be between 8 and 128");
        while(userInput<=8||userInput>=128){
            userInput=prompt("Enter length of password, Must be between 8 and 128")
        }
        passwordLen= userInput;
    }
  
    
    function genCharSet(){
    var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var alphabetLower = [, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var symbols = [".","_", ":", ";"];
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];

   
    if(setList[0]===true){
        charSet.push(alphabetUpper)
    }
    if(setList[1]===true){
        charSet.push(alphabetLower)
    }
    if(setList[2]===true){
        charSet.push(symbols)
    }
    if(setList[3]===true){
        charSet.push(numbers)
    }
    


};

getLen();
genCharSet();

};
function genPassword(){
    for(let i=0; i<=passwordLen;i++){
        charSetList=Math.ceil(randomNumber(0,charSet.length-1))
        passwordChar=charSet[charSetList][Math.ceil(randomNumber(0,charSet[charSetList].length-1))]

        password.push(passwordChar)
    }
}




