grid_dimensions = 16;

// Iterate to create grid cell divs according to desired dimensions
for (let i = 0; i < (grid_dimensions ** 2); i++) {
    let div = document.createElement('div');
    div.classList.add('gridCell');
    document.querySelector('.gridContainer').appendChild(div);
}

// Adjust css grid display to contain grid cells to container
let gridContainer = document.querySelector('.gridContainer');
gridContainer.style.cssText = 'grid-template-columns: repeat(' + grid_dimensions + ', 1fr); grid-template-rows: repeat(' + grid_dimensions + ', 1fr)';

// Toggle grid from css class
let gridCell = document.querySelectorAll('.gridCell');
let showGrid = document.querySelector('.showGrid');
gridCell.forEach((gridCell) => {
    showGrid.addEventListener('click', () => {
        gridCell.classList.toggle('gridCellBorder')
    });
});

// Hover functionality
gridCell.forEach((gridCell) => {
    gridCell.addEventListener('mouseover', () => {
        gridCell.style.cssText = 'background: #333;';
    })
})

// Clear button functionality
let clearGrid = document.querySelector('.clearGrid');
gridCell.forEach((gridCell) => {
    clearGrid.addEventListener('click', () => {
        gridCell.style.cssText = 'background: #ededed';
    });
});
