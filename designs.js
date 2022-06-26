// select color input
const colorInput = document.getElementById('colorPicker');
// select size input
const gridSize = document.getElementById('sizePicker');
// select canvas input
const canvas = document.getElementById('pixelCanvas');
// select height input
const height = document.getElementById('inputHeight').value;
// select width input
const width = document.getElementById('inputWidth').value;
// when the size is submitted by the user, call makeGrid()
gridSize.addEventListener('submit', function(event) {
	canvas.innerHTML = "";
	event.preventDefault();
	const height = document.getElementById('inputHeight');
	const width = document.getElementById('inputWidth');
	makeGrid(height, width);
});
canvas.addEventListener('click', function(event) {
	event.target.style.backgroundColor = colorPicker.value
});
function makeGrid(height, width) {
	for (let i = 0; i < height.value; i++) {
		let row = canvas.insertRow(i);
		for (let j = 0; j < width.value; j++) {
			let cell = row.insertCell(j);
		}
	}
}
