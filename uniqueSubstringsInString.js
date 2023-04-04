var partitionString = function(s) {
    let counter = 0
    let freqCounter = {}

    for(let i =0; i<s.length; i++){
        if(freqCounter[s[i]] == 1) {
        counter++
        Object.keys(freqCounter).forEach(key => {
            freqCounter[key] = 0
        })}
        freqCounter[s[i]] = 1
        if(i == s.length-1) counter++
        }
        
        return counter
    }

    console.log(partitionString("abacaba"))
