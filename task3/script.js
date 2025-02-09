const colors = document.querySelectorAll('.color');
const rectangle = document.getElementById('rectangle');
let selectedColors = [];

colors.forEach(color => {
    color.addEventListener('click', () => {
        const colorValue = color.style.backgroundColor;
        const index = selectedColors.indexOf(colorValue);

        if (index > -1) {
            selectedColors.splice(index, 1);
            color.classList.remove('selected');
        } else {
            selectedColors.push(colorValue);
            color.classList.add('selected');
        }

        if (selectedColors.length > 0) {
            rectangle.style.background = selectedColors.length > 1
                ? `linear-gradient(${selectedColors.join(', ')})`
                : selectedColors[0];
        } else {
            rectangle.style.background = 'white';
        }
    });
});
