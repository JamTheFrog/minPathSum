const russianDoll = (envelopes) => {
    let russianCount = 1;
    for(let key of envelopes){
        for(let i = envelopes.length - 1; i > envelopes.indexOf(key); i--){
            let envelope = envelopes[i]
            if(key[0] - envelope[0] > 0){
                if(key[1] - envelope[1] > 0){
                    russianCount++;
                }
            }
        } 
    }
    return russianCount;
    // for(let key of envelopes){
    //     for(let i = envelopes.length - 1; i > key; i--){
    //     if(envelopes[key[0]] - envelopes[i[0]] >= 0){
    //         if(envelopes[key[1]] - envelopes[i[1]] >= 0) {
    //             russianCount++;
    //             }  
    //     }
    //     else{
    //         if(envelopes[i[1]] - envelopes[key[1]] >= 0) {
    //             russianCount++;
    //         }
    //     }
    //     }}
    
    
};

console.log(russianDoll([[5,4],[6,4],[6,7],[2,3]]));