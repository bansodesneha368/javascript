
var givenString="  Hey you are doing good, keep it up    ";
function stringHandsOn() {
    // var givenString="  Hey you are doing good, keep it up    ";
    console.log(`step-1.`);
   console.log( givenString); 
   console.log(`-------------------------------------------`);
   
}
stringHandsOn();
console.log(`step-2.`);
 var lengthOfBeforestring = givenString.length;
 console.log(`length of the given string before trim =  ${lengthOfBeforestring}`);
 console.log(`-------------------------------------------`);
 console.log(`step-3.`);
var trim = givenString.trim();
var afterTrim = trim.length;
console.log(trim);
console.log(`length of the given string after trim =  ${afterTrim}`);
console.log(`-------------------------------------------`);
console.log(`step-4.`);
var totalSpace = lengthOfBeforestring-afterTrim;
console.log( `total spaces in the given string = ${totalSpace}`);
console.log(`-------------------------------------------`);
console.log(`step-5.`);
var firstChar = trim.charAt(0);
var lastChar = trim.charAt(33);
var firstAndLastChar = console.log(`firstChar: ${firstChar}  lastChar: ${lastChar}`);
console.log(`-------------------------------------------`);
console.log(`step-6.`);
var totalWords = trim.split(" ");
console.log(totalWords);
var wordCount = totalWords.length;

console.log(`total words: ${wordCount}`);
console.log(`-------------------------------------------`);
console.log(`step-7.`);
var indexOfGood = trim.indexOf("good");
console.log(` the index of good is: ${indexOfGood}`);
console.log(`-------------------------------------------`);
console.log(`step-8.`);
var substring = trim.substring(22);
console.log(`substring from index no. 22 is: ${substring}`);
var slice = trim.slice(22);
console.log(`slice from index no. 22 is: ${slice}`);
console.log(`-------------------------------------------`);
console.log(`step-9.`);
var endsWith = trim.endsWith("up");
console.log(`string ends with up is true or false: ${endsWith}`);
console.log(`-------------------------------------------`);
console.log(`step-10. `);
var startsWith = trim.startsWith("Hey");
console.log(`string starts with Hey is true or false: ${startsWith}`);
console.log(`-------------------------------------------`);


