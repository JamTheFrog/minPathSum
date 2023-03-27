const stars1 = (num) => {
    for(let i = 0; i < num; i){
        for(let j = num; j < j-i; j++){
            console.log("*")
        }
    }
}
stars1(3)