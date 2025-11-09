function findJudge(n: number, trust: number[][]): number {
    if(n == 1)return 1;
    const trustMap = new Map<number,number[]>();
    const reverseTrust = {};

    for(let i = 0;i<trust.length;i++){
        console.log(trust[i][1])
        const whoTrustI = trustMap.get(trust[i][1])
        reverseTrust[trust[i][0]] = true;
        if(whoTrustI){
            whoTrustI.push(trust[i][0])
            trustMap.set(trust[i][1], whoTrustI )
        }
        else{
            trustMap.set(trust[i][1], [trust[i][0]])
        }
    }
    let judge = -1;
    trustMap.forEach((value,key)=>{
        if(value.length === n-1 && !reverseTrust[key]) judge = key
    })
    return judge

};