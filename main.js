//simple function which evaluates whether or not 'str' ends with 'ending'
const solution = (str, ending) => str.endsWith(ending);


console.log(solution('hello', 'lo')) // => true
console.log(solution('falling', 'fall')) // => false
console.log(solution('how are you?', 'you?')) // => true