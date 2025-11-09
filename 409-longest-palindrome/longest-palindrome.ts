function longestPalindrome(s: string): number {
    const freqMap = new Map<string,number>();

    for(const char of s) {
        const freq = freqMap.get(char)??0;
        freqMap.set(char,freq+1)
    }

    let count = 0;
    let isOdd = false;
    let maxOdd = 0;
    freqMap.forEach((value,key)=>{
        if(value%2 === 1){
            isOdd = true;
            count+=value-1;
        }
        else{
            count += value;
        }
        

    })

    return count + +(isOdd?1:0)

};