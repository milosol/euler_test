

var square_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => [parseInt(x*x / 10), x*x % 10]);

function get_one_bit_Count(num){
    const binary_num = num.toString(2);
    return [...binary_num].filter(x => x === '1').length;
}

const check_valid = (a, b) => {
    for(let i=0; i<square_numbers.length;i++){
        let [first_num, second_num] = square_numbers[i];
        let first_num_bit = 1 << first_num;
        let second_num_bit = 1 << second_num;
        if((a & 1 << 6) === 1 << 6) 
            a = a | 1 << 9
        else if((a & 1 << 9) === 1 << 9) 
            a = a | 1 << 6
        if((b & 1 << 6) === 1 << 6) 
            b = b | 1 << 9
        else if((b & 1 << 9) === 1 << 9) 
            b = b | 1 << 6
        if(!(((first_num_bit & a) === first_num_bit && (second_num_bit & b) === second_num_bit) || ((first_num_bit & b) === first_num_bit && (second_num_bit & a) === second_num_bit))){
            return false;
        }
    }
    return true;
}

const compute = () => {
    let count = 0;
    for(let a=1<<6-1;a<1<<10;a++){
        if(get_one_bit_Count(a) !== 6) continue;
        for(let b=a;b<1<<10;b++){
            if(get_one_bit_Count(b) !== 6) continue;
            if(check_valid(a, b)){
                count ++;
            }
        }
    }
    return count;
}

let result = compute();
console.log('result = ', result);

module.exports = {
    get_one_bit_Count: get_one_bit_Count,
    check_valid: check_valid,
    compute:compute,
}

