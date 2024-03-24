//Створити 5 масивів з різними типами даних
console.log('Створити 5 масивів з різними типами даних')
const array1 = [1, 2, 3] 
console.log(array1);
const array2 = ['a', 'b', 'c'] 
console.log(array2)
const array3 = [true, false] 
console.log(array3)
const array4 = [{ name: 'John' }, { name: 'Jane' }] 
console.log(array4)
const array5 = [1, 'a', true, { name: 'John' }] 
console.log(array5)
console.log('-');
console.log('-')
console.log('-')

//Використати методи push() i pop()
console.log('Використати методи push() i pop()')
console.log(array1)
array1.push(4); 
console.log('push   ' + array1);
array1.pop();
console.log('pop   ' + array1);
console.log('-')
console.log('-')
console.log('-')


// Використати методи shift() unshift()
console.log(' Використати методи shift() unshift()');
console.log(array2) 
array2.unshift('z')
console.log('unshift   ' + array2) 
array2.shift() 
console.log('shift   ' + array2)
console.log('-')
console.log('-')
console.log('-')



//Використати метод concat()
console.log('Використати метод concat()');
const concatenatedArray = array3.concat(array4);
console.log(array3);
console.log(array4);
console.log(concatenatedArray);
console.log('-')
console.log('-')
console.log('-')


//Створити функції swap, в яких можна буде замінювати елементи масиву місцями
console.log('Створити функції swap, в яких можна буде замінювати елементи масиву місцями з деструктуризацією - для виклику прописати swapWithDestructuring')
function swapWithDestructuring(arr, index1, index2) {
	;[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
	return arr
}
console.log('-')
console.log('-')
console.log('-')


//Створити функції swap, в яких можна буде замінювати елементи масиву місцями
console.log('Створити функції swap, в яких можна буде замінювати елементи масиву місцями - для виклику прописати swap')
function swap(arr, index1, index2) {
	const temp = arr[index1]
	arr[index1] = arr[index2]
	arr[index2] = temp
	return arr
}
console.log('-')
console.log('-')
console.log('-')


//Створити декілька функцій, які будуть приймати масив та повертати трансформоване значення

console.log('Функція яка приймає число та повертає подвійне значення - для виклику прописати doubleNumbers');
function doubleNumbers(arr) {
	return arr.map(item => (typeof item === 'number' ? item * 2 : item))
}
console.log('-')


console.log('Функція яка приймає масив та видаляє всі булеві значення - для виклику прописати removeBooleans')
function removeBooleans(arr) {
	return arr.filter(item => typeof item !== 'boolean')
}