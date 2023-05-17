console.log(`step-1.`);
var square = function (val1) {
console.log(`square: ${val1*val1}`);

    
}
square(5);
square(6);
square(25);
square(100);
console.log(`---------------------------------------------------------`);
console.log(`step-2. `);
var checkType = typeof square;
console.log(` type: ${checkType}`);
console.log(`---------------------------------------------------------`)
console.log(`step-3.`);
var areaOfRectangle = function(length,width){
    var area = length*width;
    console.log(` area of rectangle: ${area}`);
}
areaOfRectangle(499,917);
console.log(`---------------------------------------------------------`);
console.log(`step-4. `);
var swapFunction = function(val1,val2){
    console.log(` values before swap= val1: ${val1}  val2: ${val2}`);
    var temp = val1;
    var val1 =val2;
    var val2 = temp;
    console.log(` values after swap= val1: ${val1}  val2: ${val2}`);

}
swapFunction("Virat","Anushka");
swapFunction(1000,2000);
console.log(`---------------------------------------------------------`);
console.log(`step-5. `);
var string = "JS the most popular language of the internet" ;
var length = string.length;
console.log(`length of string: ${length}`);
var charPosition1 = string.charAt(6);
console.log(`character at 6 index: ${charPosition1}`);
var charPosition2 = string.charAt(11);
console.log(`character at 11 index: ${charPosition2}`);
console.log(`at 6 and 11 index there are spaces`);
var lastChar = string.charAt(43);
console.log(` lastchar: ${lastChar}`);
var firstChar = string.charAt(0);
console.log(` firstChar: ${firstChar}`);
var totalWords = string.split(" ");
console.log(totalWords);
var totalWordsCount = totalWords.length;
console.log(`total words are: ${totalWordsCount}`);
var squareOfWords = totalWordsCount*totalWordsCount;
console.log(` square of total words: ${squareOfWords}`);









     