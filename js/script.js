const button = document.querySelector('.cardapio-button');
const form = document.querySelector('.form-button');

const handleSubmit = (event) => {
    event.preventDefault();

    window.location = 'pages/cardapio.html' 
}

form.addEventListener('submit', handleSubmit);