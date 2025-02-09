document.addEventListener('DOMContentLoaded', () => {
    const blocksContainer = document.getElementById('blocksContainer');

    blocksContainer.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('deleteButton')) {
            const block = target.parentElement;
            blocksContainer.removeChild(block);
        }

        if (target.classList.contains('editButton')) {
            const block = target.parentElement;
            const textElement = block.querySelector('.text');

            if (textElement.tagName === 'TEXTAREA') {
                const newText = textElement.value;
                textElement.replaceWith(createTextElement(newText));
            } else {
                const currentText = textElement.textContent;
                const textarea = document.createElement('textarea');
                textarea.value = currentText;
                textarea.addEventListener('blur', () => {
                    const newText = textarea.value;
                    textarea.replaceWith(createTextElement(newText));
                });
                block.insertBefore(textarea, textElement);
                textElement.style.display = 'none'; // Сховати оригінальний текст
                textarea.focus();
            }
        }
    });

    function createTextElement(text) {
        const p = document.createElement('p');
        p.className = 'text';
        p.textContent = text;
        return p;
    }
});
