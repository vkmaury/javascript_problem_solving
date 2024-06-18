let books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: '1984', author: 'George Orwell' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
];

// Sort books by title alphabetically
books.sort((a, b) => {
    // Convert titles to lowercase to ensure case-insensitive comparison
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    // Compare titles
    if (titleA < titleB) {
        return -1;
    }
    if (titleA > titleB) {
        return 1;
    }
    return 0;
});

console.log(books);
