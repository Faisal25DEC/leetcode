function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count = 0;
    for(let i = 0;i<flowerbed.length;i++){
        if(flowerbed[i] !== 1){

        if( i == 0 ){
            if(flowerbed[i+1] !== 1){
                count++;
                flowerbed[i] = 1;
            }
        }
        else if(i === flowerbed.length-1){
            if(flowerbed[i-1] !== 1){
                count++;
                flowerbed[i] = 1;
            }
        }
        else if(flowerbed[i-1]!==1 && flowerbed[i+1]!==1){
            count++
            flowerbed[i] = 1;
        }
        }
    }
    return count >= n;
};