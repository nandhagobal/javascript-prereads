var arr=[1,2,3,4];

var checker=(num)=>{
    return num*10;
}

var result = arr.map(checker)
console.log(result);

maper=(nums,callBack)=>{
    var result=[];
    var i=0;
    for(let num of nums){
            result[i]=callBack(num);
            i++;
    }
    return result;
}


result=maper(arr,checker);
console.log(result);