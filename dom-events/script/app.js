
const buttonEl = document.querySelector('button');
const inp = document.querySelector('input');
const ulEl = document.querySelector('ul');

buttonEl.addEventListener('click', function(evt) {
	const li = document.createElement('li');
	li.textContent = inp.value;	
	ulEl.appendChild(li);
	inp.value = '';
});
// handleClick doesn't need brackets here. Were just providing the name of function to run, not the result of it. 

function handleClick() {
	console.log("button clicked");
}

ulEl.addEventListener('click', function() {
	ulEl.style.backgroundColor = '333';
} )



//-------------------------------
// const outer = document.querySelector(".outer");
// const middle = document.querySelector(".middle");
// const inner = document.querySelector(".inner");

// outer.addEventListener('click', function() {
// 	alert("clicked on outer")
// });

// middle.addEventListener('click', function() {
// 	alert("clicked on middle")
// });

// inner.addEventListener('click', function() {
// 	alert("clicked on inner")
	
// });

//Preventing 'propagation' wll stop from the other alerts from occurring



