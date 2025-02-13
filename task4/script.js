document.addEventListener('DOMContentLoaded', () => {
    const blocksContainer = document.getElementById('blocksContainer');

    blocksContainer.addEventListener('click', (event) => {
        const target = event.target;
        const block = target.closest('.block');

        if (!block) return;

        if (target.classList.contains('deleteButton')) {
            block.remove();
        }

        if (target.classList.contains('editButton')) {
            let textElement = block.querySelector('.text');

            if (textElement && textElement.tagName.toUpperCase() === 'TEXTAREA') {
                return;
            }

            const currentText = textElement.textContent;
            const textarea = document.createElement('textarea');
            textarea.value = currentText;
            textarea.className = 'text';
            textarea.addEventListener('blur', () => {
                textElement = createTextElement(textarea.value);
                textarea.replaceWith(textElement);
            });

            textElement.replaceWith(textarea);
            textarea.focus();
            textarea.select();
        }
    });

    function createTextElement(text) {
        const p = document.createElement('p');
        p.className = 'text';
        p.textContent = text;
        return p;
    }
});
