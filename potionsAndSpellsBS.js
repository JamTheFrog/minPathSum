var successfulPairs = function(spells, potions, success) {
    potions.sort((a,b) => a-b)
    const finalArr = [];
    
    for(let i = 0; i<spells.length; i++){
        let left = 0
        let right = potions.length - 1
        let middle = Math.trunc((left+right)/2)
        while(success && left <= right){
        if(spells[i] * potions[middle] >= success){
            if(spells[i] * potions[middle-1] >= success)right = middle - 1
            else break     
        }
        if(spells[i] * potions[middle] < success) left = middle + 1
        middle = Math.trunc((left+right)/2)
        }
        if(left > right) finalArr.push(0)
        else finalArr.push(potions.length-middle)
      
    }
    
    return finalArr

};