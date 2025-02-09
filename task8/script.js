const bookListItems = document.querySelectorAll('#bookList li');

bookListItems.forEach(item => {
    item.addEventListener('click', function() {
        bookListItems.forEach(book => {
            book.classList.remove('active');
        });

        this.classList.add('active');
    });
});
