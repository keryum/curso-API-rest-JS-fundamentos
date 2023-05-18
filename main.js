const API_URL_RANDOM= "https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_jRjrmwvUgTc1KArB1PqQcAho9v6GGM9NcMr1gooi4XRYmaMPQn1HSulhiDFTPPWG";
const API_URL_FAV= "https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_jRjrmwvUgTc1KArB1PqQcAho9v6GGM9NcMr1gooi4XRYmaMPQn1HSulhiDFTPPWG";

const addFavourite = document.querySelector('.addfavourite')
const favourite = document.querySelector ('.favourite')
const spanError = document.getElementById('error')

async function loadRandomMichis() {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();

        const img1 = document.querySelector('#img1')
        const img2 = document.querySelector('#img2')
        const img3 = document.querySelector('#img3')
        const img4 = document.querySelector('#img4')
        const img5 = document.querySelector('#img5')
        const img6 = document.querySelector('#img6')
        const img7 = document.querySelector('#img7')
        const img8 = document.querySelector('#img8')
        const img9 = document.querySelector('#img9')
        const img10 = document.querySelector('#img10')
        
        img1.src = data[0].url
        img2.src = data[1].url
        img3.src = data[2].url
        img4.src = data[3].url
        img5.src = data[4].url
        img6.src = data[5].url
        img7.src = data[6].url
        img8.src = data[7].url
        img9.src = data[8].url
        img10.src = data[9].url
    
};

loadRandomMichis();
loadFavouriteMichis();
async function loadFavouriteMichis() {
    const res = await fetch(API_URL_FAV);
    if (res.status !==200) {
        spanError.classList.toggle('inactive')
        spanError.innerText= `Ups, algo salió mal 
        error ${res.status}` 
    }
    const data = await res.json();
};

async function saveFavouriteMichis() {
    const rest = await fetch()
}

addFavourite.addEventListener('click', addToFavourites)
favourite.addEventListener('click', noFavourite)

function addToFavouritesBtn() {
    addFavourite.classList.add('inactive')
    favourite.classList.toggle('inactive')
}

function noFavourite() {
    addFavourite.classList.toggle('inactive')
    favourite.classList.add('inactive')
    
}