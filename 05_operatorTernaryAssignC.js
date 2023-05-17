console.log(`step-1.`);
function maleMarriageEligibility(gender,age,boyName)
{
var MarriageEligibility = (gender=="Male" && age>=21) ? `${boyName} you are eligible for marriage`:`${boyName} you are not eligible for marriage`;
console.log(MarriageEligibility);
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(`--------------------------------------------------------`);
console.log(`step-2.`);
function femaleMarriageEligibility(gender,age,girlName){
    var MarriageEligibility = (gender=="Female" && age>=18) ? `${girlName} you are eligible for marriage`:`${girlName} you are not eligible for marriage`;
console.log(MarriageEligibility);


}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(`--------------------------------------------------------`);



