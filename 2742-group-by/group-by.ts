interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    const obj: Record<string,any[]> = {}
    for(let i = 0;i<this.length;i++){
        const fnValue = fn(this[i])
        if(!obj[fnValue]) obj[fnValue] = [this[i]]
        else obj[fnValue].push(this[i])
    }
    return obj;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */