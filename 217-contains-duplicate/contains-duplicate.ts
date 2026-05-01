function containsDuplicate(nums: number[]): boolean {
    const numberMap  = new Map();
    for(const num of nums){
        if(numberMap.get(num)){
            return true;
        }
        numberMap.set(num,1);
    }   
    return false;
};