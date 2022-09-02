

const get_consecutive_length = (exp_numbers) => {
    exp_numbers = exp_numbers.sort((a, b) => a - b);
    for(let i=0; i<exp_numbers.length; i++){
        if(exp_numbers[i] !== i+1){
            return i;
        }
    }
    return exp_numbers.length;
}

const calc_exp = (num_set, exp_numbers) => {
    if(num_set.length === 0) return;
    if(num_set.length === 1){
        if(Number.isInteger(num_set[0]) && num_set[0] > 0 && !exp_numbers.includes(num_set[0])){
            exp_numbers.push(num_set[0]);
        }
        return;
    }
    for(let i=0; i<num_set.length - 1; i++){
        for(let j=i+1; j<num_set.length; j++){
            let new_set = [...num_set];
            new_set.splice(j, 1);
            new_set.splice(i, 1);
            calc_exp([...new_set, num_set[i] + num_set[j]], exp_numbers);
            calc_exp([...new_set, num_set[i] - num_set[j]], exp_numbers);
            calc_exp([...new_set, num_set[j] - num_set[i]], exp_numbers);
            calc_exp([...new_set, num_set[i] * num_set[j]], exp_numbers);
            if(num_set[j] !== 0)
            calc_exp([...new_set, num_set[i] / num_set[j]], exp_numbers);
        }
    }
}

const compute = () => {
    let result = [];
    for(let a=1; a<10; a++){
        for(let b=a+1; b<10; b++){
            for(let c=b+1; c<10; c++){
                for(let d=c+1; d<10; d++){
                    let exp_numbers = [];
                    calc_exp([a, b, c, d], exp_numbers);
                    result.push([`${a}${b}${c}${d}`, get_consecutive_length(exp_numbers)])
                }
            }
        }   
    }
    result = result.sort((a, b) => (a[1] - b[1]));
    return result[result.length - 1][0]
}

module.exports = {
    get_consecutive_length: get_consecutive_length,
    calc_exp: calc_exp,
    compute:compute,
}

let result = compute();
console.log(result);
