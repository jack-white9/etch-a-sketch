grid_dimensions = 16;

// Iterate to create grid cell divs according to desired dimensions
for (let i = 0; i < (grid_dimensions ** 2); i++) {
    let div = document.createElement('div');
    div.classList.add('gridCell');
    document.querySelector('.gridContainer').appendChild(div);
}

// Define DOM elements in global scope
let gridCell = document.querySelectorAll('.gridCell');
let showGrid = document.querySelector('.showGrid');
let gridContainer = document.querySelector('.gridContainer');
let clearGrid = document.querySelector('.clearGrid');
let adjustSize = document.querySelector('.adjustSize');


// Adjust css grid display to contain grid cells to container
function drawGrid() {
    gridContainer.style.cssText = 'grid-template-columns: repeat(' + grid_dimensions + ', 1fr); grid-template-rows: repeat(' + grid_dimensions + ', 1fr)';
}

// Toggle grid from css class
function showGridButton() {
    gridCell.forEach((gridCell) => {
    showGrid.addEventListener('click', () => {
        gridCell.classList.toggle('gridCellBorder')
        });
    });
}


// Hover functionality
function mouseoverEvent() {
    gridCell.forEach((gridCell) => {
        gridCell.addEventListener('mouseover', () => {
            gridCell.style.cssText = 'background: #333;';
        });
    });
}

// Clear button functionality
function clearGridButton() {
    gridCell.forEach((gridCell) => {
    clearGrid.addEventListener('click', () => {
        gridCell.style.cssText = 'background: #ededed';
        });
    });
}

// Enact adjust size button function
function adjustButton() {
    let user_grid_choice = 1;
    adjustSize.addEventListener('click', () => {
        // Collect user input for grid size
        while (true) {
            user_grid_choice = prompt('How big should the grid be? (Enter a whole number)');
            if (user_grid_choice <= 0) {
                alert('Please pick a number above 0.');
            } else if (user_grid_choice > 100) {
                alert('For the sake of not exploding your browser, please choose a number less than or equal to 100.');
            } else {
                break;
            }
        }
        // Delete old grid divs to prevent 16^2 extra grids than intended
        oldGrids = document.querySelectorAll('.gridCell');
        oldGrids.forEach(gridCell => {
            gridCell.remove();
        });
        // Iterate to create grids
        for (let i = 0; i < (user_grid_choice ** 2); i++) {
            console.log(i); //
            let div = document.createElement('div');
            div.classList.add('gridCell');
            document.querySelector('.gridContainer').appendChild(div);
        }
        // Adjust css grid accordingly
        gridContainer.style.cssText = 'grid-template-columns: repeat(' + user_grid_choice + ', 1fr); grid-template-rows: repeat(' + user_grid_choice + ', 1fr); border: 1px solid black';
        console.log(gridContainer)
        // Updates gridCell object for new grids
        gridCell = document.querySelectorAll('.gridCell');
        showGridButton();
        mouseoverEvent();
        clearGridButton();
    });
}

drawGrid();
showGridButton();
mouseoverEvent();
clearGridButton();
adjustButton();