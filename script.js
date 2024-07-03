var currentPage = 1;
var totalPages = 5; // Número total de textos
var texts = [
    'hey',
    'espero que',
    'me recuerdes',
    'cada vez',
    'que veas uno de estos....(si quieres, obvio) '
];

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        document.getElementById('text').textContent = texts[currentPage - 1];
    } else if (currentPage === totalPages) {
        // Mostrar la flor después del último texto
        document.querySelector('.flower-container').style.display = 'block';
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        document.getElementById('text').textContent = texts[currentPage - 1];
        // Ocultar la flor si se retrocede desde el último texto
        if (currentPage < totalPages) {
            document.querySelector('.flower-container').style.display = 'none';
        }
    }
}