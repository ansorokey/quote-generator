const apiURL = 'https://api.quotable.io/random';

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const quote = document.querySelector('#quote');
    quote.innerHTML = data.content;

    const author = document.querySelector('#author');
    author.innerHTML = data.author;
}

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----" + author.innerHTML, 'Tweet Window', 'width=600', 'height=300')
}

getQuote(apiURL);
