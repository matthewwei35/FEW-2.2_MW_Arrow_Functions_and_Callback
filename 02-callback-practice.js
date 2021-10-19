setTimeout(() => console.log('1 ------------------------------'), 1000)

// TODO: The setTimeout function takes a callback. I've used a 
// regular function you should change it to an arrow function

// const second = _ => console.log('Example 1 - one second later')
// setTimeout(second, 1000)

setTimeout(() => console.log('Example 1 - one second later'), 1000)

// A Callback is a function you pass as a parameter to 
// a function. These appear everywhere in javascript


setTimeout(() => console.log('2 ------------------------------'), 3000)

// TODO: use setTimeout to print a message 3 seconds in the future:

// const threeSeconds = _ => console.log('Example 2 - three seconds later')
// setTimeout(threeSeconds, 3000)

setTimeout(() => console.log('Example 2 - three seconds later'), 3000)


console.log('3 ------------------------------')

const primes = [1,2,3,5,7]

// Using forEach() often you'll have a loop and want to 
// iterate over each element in the loop.

// Use forEach like this: numbers.forEach(() => {})
// Here we passed a callback into forEach and forEach
// executes the callback once for each item in the array
// passing one value from the array each iteration

primes.forEach(n => {
	// This function is the callback
	// n is a value from the numbers array
	console.log(n)
})

// TODO: Use foreach to double each number in the numbers array
// print the new value to the console. 

primes.forEach(n => console.log(n * 2))

// TODO: Use forEach to print only the even numbers to the console
// You know a number is even if n % 2 === 0

primes.forEach(n => {
	if (n % 2 === 0) {
		console.log(n)
	}
})

// The forEach method calls the provided function with the following
// parameters: item, index, array.
// Read the documentation here: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://javascript.info/callbacks
// https://javascript.info/array-methods#iterate-foreach


console.log('4 ------------------------------')

// After reading the documentation you may have noticed that
// forEach supplies three parameters to the callback: item, index, and array
// These extra parameters are not always needed so they are often omitted. 
// Some times they can be useful. 

primes.forEach((item, index, arr) => {
	console.log(item, index, arr)
})

// TODO: Use the index. Multiply each value by it's index in the array and 
// print the value to the console

primes.forEach((n, index) => console.log(n * index))


setTimeout(() => console.log('5 ------------------------------'), 1200)

/* TODO: ***********************************************
For each of the names in the array below print
them to the console. use Array.forEach()
The callback in foreach receives a parameter that 
is an item from the array. In this case a name.
*/
const names = ['Andy', 'Boba', 'Kris', 'Dana']

names.forEach((name, index) => {
	setTimeout(() => {
		console.log(`${index + 1}) ${name}`)
	}, 1200)
})

/* ***********************************************
forEach provides a second parameter to it's
callback that is the index. Print each name from
from the array preceded by it's index + 1 and the )
like this: 

1) Andy
2) Boba
3) Kris
4) Dana

*/


/* ************************************************
Use forEach and setTimeout to print each name
with a delay of 1200ms.
*/


console.log('6 ------------------------------')

// These callbacks and forEach are really useful. You'll 
// see these everywhere in js! You need to take this 
// further! 

// Imagine that forEach did not exist! Can you write your own? 

// TODO: Write a function forEvery() it should an array and a 
// callback as arguments. For each item in the array call the 
// callback and pass the item, the index, and the array into 
// the callback as arguments. 

// NOTE! Do not use arr.forEach() to solve this problem! 

// const forEvery = (arr, cb) => {
// 	for (elem in arr) {
// 		cb(arr[elem])
// 	}
// }
// console.log(forEvery(names, name => console.log(name)))

const forEvery = (callback, arr) => {
	for (let i = 0; i < arr.length; i += 1) {
		callback(arr[i])
	}
}

forEvery(n => console.log(n), names)
