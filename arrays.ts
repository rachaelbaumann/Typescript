let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

numbers.push(8, 9, 10);
console.log(numbers);

numbers[numbers.length] = 11;
console.log(numbers);

numbers.pop();//takes out last number
console.log(numbers);

numbers.splice(5);//returns array of first 5 numbers
console.log(numbers);

numbers.shift();// removes first element of array
console.log(numbers);

console.log(numbers[3]);