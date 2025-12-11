const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'pagedart.com';

function submitted(event) {
    event.preventDefault();
    book_name = q.value
    const newurl = "/search?name=" + encodeURIComponent(book_name)
    window.location.href = newurl;
}

f.addEventListener('submit', submitted);