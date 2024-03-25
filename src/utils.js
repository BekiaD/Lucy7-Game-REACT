//GETS RANDOM INTEGER: [1..6]

function d6(){
    return Math.floor(Math.random() * 6) +1
}

//GET N ROLLS => [NUM...]

function getRolls(n){
return Array.from({ length:n }, () => d6())
}

//GET SUM OF NUMS

function sum(nums){
    return nums.reduce((prev,cur) => prev + cur, 0)
}

export {d6, getRolls, sum}