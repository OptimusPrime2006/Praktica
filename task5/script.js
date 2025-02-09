document.addEventListener('DOMContentLoaded', () => {
    const colors = document.querySelectorAll('.color');
    const squares = document.querySelector('.canvas');

    let selectedColor = '';

    colors.forEach(color => {
        color.addEventListener('click', () => {
            selectedColor = color.style.backgroundColor;
            colors.forEach(c => c.classList.remove('selected'));
            color.classList.add('selected');
        });
    });

    for (let i = 0; i < 100; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('click', () => {
            if (selectedColor) {
                square.style.backgroundColor = selectedColor;
            }
        });
        squares.appendChild(square);
    }
});
