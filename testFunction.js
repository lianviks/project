function getMathResult(a , b) {
    if (typeof(b) !== 'number' && b <= 0){
        return a;
    } else {
        let str = '';
        for (let i = 1; i <= b; i++){
            if (i === b){
                str += a*i;
            }else{
                str += a*i +'---';
            }
            console.log(str);
        }
    }

}
getMathResult(5,0);