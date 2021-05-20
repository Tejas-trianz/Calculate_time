
const calculate = (val) =>{
    if(!val){
        console.log("value not passed");
        return
    }
    if(!parseInt(val)){
        console.log("value error");
        return
    }
    min = val * 60;
    console.log(min);
    sec = min * 60;
    console.log(sec);
}

calculate("String");