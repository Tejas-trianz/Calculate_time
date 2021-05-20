
const calculate = (val) =>{
    if(!val){
        console.log("value not passed");
        return
    }
    if(!parseInt(val)){
        console.log("value error");
        return
    }
    console.log(val)
}

calculate("hello");