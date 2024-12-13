// 1. Добавление элемента в конец массива
// Напишите функцию, которая добавляет элемент в конец массива, используя push.

let first  = [ 1, 2, 3]
function addToEnd(){
    first.push(4)
    return first;
}
console.log(addToEnd())
// console.log(addToEnd([1, 2, 3], 4)); // [1, 2, 3, 4]


// 2. Удаление последнего элемента массива
// Напишите функцию, которая удаляет последний элемент массива, используя pop.

let second = [1,2,3]

function removeLast(){
    second.pop()
    return second;
}
console.log(removeLast());



// console.log(removeLast([1, 2, 3])); // [1, 2]

// 3. Добавление элемента в начало массива
// Используя unshift, добавьте элемент в начало массива.

let third = [1,2,3]

function addToStart(){
    third.unshift(0)
    return third;
}
console.log(addToStart());


// console.log(addToStart([1, 2, 3], 0)); // [0, 1, 2, 3]

// 4. Удаление первого элемента массива
// Напишите функцию, которая удаляет первый элемент массива, используя shift.

let thirds = [1, 2, 3];

function removeFirst() {
    let removed = thirds.shift(); 
    return removed; 
}

console.log(removeFirst()); 
console.log(thirds); 

// console.log(removeFirst([1, 2, 3])); // [2, 3]




// 7. Удаление элемента из массива по индексу
// Используя splice, удалите элемент из массива по индексу.
let forth = [1,2,3,4]

function removeAtIndex(index){
    let remove = forth.splice(index, 1);
    return remove;
}
console.log(removeAtIndex(2));
console.log(forth);




// console.log(removeAtIndex([1, 2, 3, 4], 2)); // [1, 2, 4]

// 8. Добавление элемента в массив по индексу
// Используя splice, добавьте элемент по указанному индексу.
let fifth = [1, 2, 4];
function addAtIndex(index,element){
    fifth.splice(index, 0, element);
    return fifth;
}
console.log(addAtIndex(2,3));
console.log(fifth);



// console.log(addAtIndex([1, 2, 4], 2, 3)); // [1, 2, 3, 4]

// 9. Замена элемента в массиве по индексу
// Используя splice, замените элемент массива по индексу.
let sixth = [1,2,3]
function replaceAtIndex(index, newValue){
    sixth.splice(index, 1, newValue);
    return sixth;
}
console.log(replaceAtIndex(1, 9));
console.log(sixth);


// console.log(replaceAtIndex([1, 2, 3], 1, 9)); // [1, 9, 3]