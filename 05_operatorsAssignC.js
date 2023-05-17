console.log(`step-1.`);
var tcsInterviewEligibility = function(gradScore,hscScore,sscScore,candidatesName)
{
    var result = gradScore>=70 || hscScore>=80 || sscScore>90 ? `Congrates ${candidatesName} you are eligible for TCS interview.`:`Unfortunately ${candidatesName} you are not eligible for TCS interview.`;
    console.log(`${result}`);
}
tcsInterviewEligibility(80,86,90,"Sneha");
tcsInterviewEligibility(70,65,90,"Sohan");
tcsInterviewEligibility(60,79,88,"Aniket");
console.log(`------------------------------------------------------`);


