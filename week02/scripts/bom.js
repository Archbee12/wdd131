const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('')

// To Create an element we use document.createElement wrapped in a variable
const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = 'X';

li.append(deleteButton);

list.append(li);