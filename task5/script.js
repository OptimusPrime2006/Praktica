document.addEventListener('DOMContentLoaded', () => {
    const colors = document.querySelectorAll('.color');
    const squaresContainer = document.querySelector('.canvas');

    let selectedColor = '';

    colors.forEach(color => {
        color.addEventListener('click', () => {
            selectedColor = color.dataset.color;
            document.querySelector('.color.selected')?.classList.remove('selected');
            color.classList.add('selected');
        });
    });

    function createSquares(amount) {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < amount; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            fragment.appendChild(square);
        }
        squaresContainer.appendChild(fragment);
    }

    squaresContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('square') && selectedColor) {
            event.target.style.backgroundColor = selectedColor;
        }
    });

    createSquares(100);
});
