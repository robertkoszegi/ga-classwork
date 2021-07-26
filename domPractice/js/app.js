


const titleEl = document.getElementById('title');
// const titleEl = document.querySelector('#title');

const pEl = document.querySelector('.cool'); //<-- only find the first occurrence
// console.log(titleEl);
// console.log(pEl);

// pEl.textContent = "I'm the first p tag";
// pEl.innerHTML = "<i>I'm the first p tag</i>";

titleEl.style.textAlign = 'center';
pEl.style.color = 'grey';

// - Attributes of an element
// console.log("Chekign if pEl has a class" + pEl.hasAttribute("class"))
// console.log(pEl.getAttribute("style"))
const aEl = document.querySelector('a');
aEl.setAttribute("href", 'https://www.google.com')

const commentEls = document.querySelectorAll(".comment");
// const commentEls2 = document.querySelector
console.log(commentEls)

//li items are part of an array, so we have to loop through them
for ( let commentEl of commentEls) {
	commentEl.style.fontSize = '30px';
}