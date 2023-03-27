const binaryAddition = (a, b) => {
    let newA, newB, remainder, devidedValue;
    const newAssigner = (x) =>{
        remainder = x % 15
        devidedValue = Math.floor(x/15)
        if(remainder === 1 || remainder === 2 || remainder === 4 || remainder === 8){
            addSome = 1;
        }
        if(remainder ===3 || remainder ===5 || remainder ===6 || remainder ===9 || remainder ===10 || remainder ===12){
            addSome = 2;
        }
        if(remainder ===7 || remainder ===11 ||remainder ===13 ||remainder ===14){
            addSome = 3;
        }
        return (devidedValue*4) + addSome
    }
    newA = newAssigner(a)
    newB = newAssigner(b)
    return newA + newB
}

console.log(binaryAddition(521, 122));
