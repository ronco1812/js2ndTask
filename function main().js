function main()
{
    const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
   // range(grades);
   //median(grades);
   last(grades);
}
/*function range(grades)
{
    
   console.log( Math.max(...grades)-Math.min(...grades));


function median(grades)
{
 var newArr = [];
 newArr=grades.sort(function(a, b){return a - b});
 if(grades.lenght%2 === 1)
 {
     return newArr[(grades.lenght-1)/2];
 }
 else return ((newArr[grades.lenght/2]) + (newArr[(grades.lenght -1)/2])) /2;

}*/
function last(grades)
{
    var arr = [];
    for(let i = 0; i <(grades.length / 2); i++)
    {
       delete grades[i];
    }
    
    console.log( Math.max(...grades)-Math.min(...grades));
  
}