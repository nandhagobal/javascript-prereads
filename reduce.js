var arr=[175,50,25];
var reducer=(total,num)=>{
    return total+num;
}
var result =arr.reduce(reducer);
console.log(result);

reducefn=(nums,callback)=>{
    var total=nums[0];
    for(i=1;i<nums.length;i++){
        total=callback(total,nums[i]);
    }
    return total;
}

result = reducefn(arr,reducer)
console.log(result)