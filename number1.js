function last(arr,num){
    let start = arr.length-num;
    if(start<0){ start = 0;}
    let result = arr.slice(start, arr.length+1)
    return result

}
console.log(last([7,9,0,-2]))
