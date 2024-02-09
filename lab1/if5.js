let s = 0;
for(let i = 1; i <= 15; i++) {
    if(![5, 7].includes(i)) {
        s += i;
    }
}
console.log(s)