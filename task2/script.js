function generateGrid() {
    const input = document.getElementById('input').value;
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    const rows = input.split('\n');
    const numColumns = rows[0].length;

    grid.style.gridTemplateColumns = `repeat(${numColumns}, 50px)`;

    rows.forEach(row => {
        for (let i = 0; i < row.length; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (row[i] === '1') {
                cell.classList.add('black');
            }
            grid.appendChild(cell);
        }
    });
}
