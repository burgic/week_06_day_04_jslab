document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

});


const handleFormSubmit = function(event) {
  event.preventDefault();
  const resultParagraph = document.querySelector('.form-item')
  resultParagraph.textContent = `Your book ${event.target.title.value}`
  

const newListItem = document.createElement('reading-list')
newListItem.textContent = `Book: ${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
newListItem.classList.add
const list = document.querySelector('ul')
list.appendChild(newListItem)

document.getElementById("new-item-form").reset()

console.log(event.target.title.value)
console.log(event.target.author.value)
console.log(event.target.category.value)
}