var arr=[1,2,3,4];
var callback=ele=>{
    console.log(ele);
}
arr.forEach(callback);

var forEachfn=(nums,callback)=>{
    for(i=0;i<nums.length;i++){
        callback(nums[i]);
    }
}

forEachfn(arr,callback);