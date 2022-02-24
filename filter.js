var arr=[1,2,3,4];

var checker=(num)=>{
    return num >= 2;
    
}


console.log(result);

filter=(nums,callBack)=>{
    var result=[];
    var i=0;
    for(let num of nums){
        if(callBack(num)==true){
            result[i]=num;
            i++;
        }
    }
    return result;
}


result=filter(arr,checker);
console.log(result);