function findContentChildren(g: number[], s: number[]): number {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);

    console.log(g,s);

    let i = 0;
    let j = 0;
    let count = 0;
    while(i<g.length && j<s.length){
        if(g[i]<=s[j]){
            i++;
            j++;
            count++;
        }
        else j++;
    }
    return count;
};