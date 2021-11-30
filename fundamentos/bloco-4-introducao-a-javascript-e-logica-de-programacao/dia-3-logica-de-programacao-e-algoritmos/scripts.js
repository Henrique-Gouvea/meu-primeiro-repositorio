// let n=3;
// line="";

// for (let i=0; i<n; i++){
//     line=line+"*";
// }
// for(let i=0; i<n; i++){
//     console.log(line);
// }
// console.log("--------------------------------Exercicio-2-------------------------------");

// n=3;
// line="";

// for (let i=0; i<n; i++){
//     line=line+"*";
//     console.log(line);
// }

console.log("--------------------------------Exercicio-2-------------------------------");

n=4
let c=1;
let l="";

for(let i=0; i<n; i++){
    for(let index=1; index<n; index++){
        if(c<=index){
            l=l+" ";
        }
        else{
            l=l+"*";  
        }
    }
    console.log(l);
    c++;
}