let n=3;
line="";

for (let i=0; i<n; i++){
    line=line+"*";
}
for(let i=0; i<n; i++){
    console.log(line);
}

for (let i=0; i<n; i++){
    line=line+"*";
    for(let i=0; i<n; i++){
        console.log(line);
    }
}
