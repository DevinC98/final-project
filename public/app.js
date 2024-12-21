async function searchBooks() {
    const query = document.getElementById('search').value;
    const response = await fetch(`/api/books?query=${query}`);
    const books = await response.json();
    displayResults(books);
}

function displayResults(books) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    books.items.forEach(book => {
        const bookEl = document.createElement('div');
        bookEl.innerHTML = `
            <h3>${book.volumeInfo.title}</h3>
            <p>${book.volumeInfo.authors?.join(', ')}</p>
        `;
        resultsDiv.appendChild(bookEl);
    });
}