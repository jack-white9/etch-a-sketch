grid_dimensions = 16;
for (let i = 0; i < (grid_dimensions ** 2); i++) {
    let div = document.createElement('div');
    div.classList.add('gridCell');
    document.querySelector('.gridContainer').appendChild(div);
}
