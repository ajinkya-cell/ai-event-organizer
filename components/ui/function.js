function longestGap(timestamp){
    if(!timestamp || timestamp.length<2)
        return 0

    let array = timestamp.map(t=>new Date(t).getTime())

    array.sort((x,y)=>x-y)

    let maxGap = 0

    for(let i = 1 ; i <array.length; i++){
        let gap = array[i] - array[i-1]
        if(gap > maxGap){
            maxGap = gap;
        }
    }
    return maxGap
}