// select color input
const color = document.getElementById('colorPicker');
// select size input
const grid = document.getElementById('sizePicker');
// select canvas input
const canvas = document.getElementById('pixelCanvas');
// select height input
const height = document.getElementById('inputHeight').value;
// select width input
const width = document.getElementById('inputWidth').value;
// when the size is submitted by the user, call makeGrid()
grid.addEventListener('click', function(pd) {
    pd.preventDefault();
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
    makeGrid(height, width);
})
function makeGrid(height, width) {
    for(let i = 0; i < height.value; i++) {
        let row = canvas.insertRow(i);
        for(let j = 0; j < width.value; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', function(e) {
                cell.style.backgroundColor = colorPicker.value;
            });
    }
}
}
