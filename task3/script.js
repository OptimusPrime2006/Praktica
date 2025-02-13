const colors = document.querySelectorAll('.color');
const rectangle = document.getElementById('rectangle');
let selectedColors = [];

colors.forEach(color => {
    color.addEventListener('click', () => {
        const colorValue = color.dataset.color;
        const index = selectedColors.indexOf(colorValue);

        if (index > -1) {
            selectedColors.splice(index, 1);
        } else {
            selectedColors.push(colorValue);
        }
        
        color.classList.toggle('selected');

        rectangle.style.background = selectedColors.length > 1
            ? `linear-gradient(to right, ${selectedColors.join(', ')})`
            : selectedColors[0] || 'white';
    });
});
