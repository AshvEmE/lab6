const array1 = [1, 2, 3] 
const array2 = ['a', 'b', 'c'] 
const array3 = [true, false] 
const array4 = [{ name: 'John' }, { name: 'Jane' }] 
const array5 = [1, 'a', true, { name: 'John' }] 

array1.push(4); 
console.log(array1);
array1.pop();
console.log(array1);

array2.unshift('z')
console.log(array2) 
array2.shift() 
console.log(array2)


const concatenatedArray = array3.concat(array4);
console.log(concatenatedArray);



function swapWithDestructuring(arr, index1, index2) {
	;[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
	return arr
}


function swap(arr, index1, index2) {
	const temp = arr[index1]
	arr[index1] = arr[index2]
	arr[index2] = temp
	return arr
}


function doubleNumbers(arr) {
	return arr.map(item => (typeof item === 'number' ? item * 2 : item))
}

function removeBooleans(arr) {
	return arr.filter(item => typeof item !== 'boolean')
}