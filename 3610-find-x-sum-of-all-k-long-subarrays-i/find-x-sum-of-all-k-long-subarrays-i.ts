function getMapSum(obj:Record<string,number>,x:number){
    let sum:number = 0;
    let freqToValPair:Record<string,number> = {}
    const arr : [number,number][]= Object.entries(obj).map((a)=>[+a[1],+a[0]])
    arr.sort((a,b)=>{
        if(b[0]-a[0]>0) return b[0]-a[0];
        return b[1]-a[1];
    })
    for(let i = 0;i<Math.min(x,arr.length);i++){

        sum+=(+arr[i][0]*+arr[i][1]);
    }
    return sum;
}

function findXSum(nums: number[], k: number, x: number): number[] {
    const valToFreqPair:Record<string,number> = {};
    const res = [];
    let j = 0;
    let i = 0;
    while(i<nums.length){
        valToFreqPair[nums[i]] = valToFreqPair[nums[i]]?valToFreqPair[nums[i]]+1:1;
        if(i-j+1 === k){
            res.push(getMapSum(valToFreqPair,x));
            valToFreqPair[nums[j]] = valToFreqPair[nums[j]]-1;
        
            j++;
        }
        i++;
    };
    return res;
};