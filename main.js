const API_URL_RANDOM= "https://api.thecatapi.com/v1/images/search?limit=50&api_key=live_jRjrmwvUgTc1KArB1PqQcAho9v6GGM9NcMr1gooi4XRYmaMPQn1HSulhiDFTPPWG";
const API_URL_FAV= "https://api.thecatapi.com/v1/favourites?api_key=live_jRjrmwvUgTc1KArB1PqQcAho9v6GGM9NcMr1gooi4XRYmaMPQn1HSulhiDFTPPWG";
const API_URL_FAV_DELETE= (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=live_jRjrmwvUgTc1KArB1PqQcAho9v6GGM9NcMr1gooi4XRYmaMPQn1HSulhiDFTPPWG`;

const spanError = document.getElementById('error')

async function loadRandomMichis() {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log(data)
    if (res.status !==200) {
        spanError.classList.toggle('inactive')
        spanError.innerText= `Ups, algo salió mal 
        error ${res.status}` 
    } else {
        const article = document.querySelector('.randomMichisArticle')
        article.innerText = '';
        data.forEach(michi => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const div = document.createElement('div');
        const btnCreate = document.createElement('img');
        const btnQuit = document.createElement('img')

        btnCreate.src = './iconos/pngwing.com (7).png';
        btnCreate.onclick = () => ambas();
        btnQuit.src = './iconos/pngwing.com (6).png'
        div.appendChild(btnCreate);
        div.appendChild(btnQuit);
        img.src = michi.url;
        figure.appendChild(img);
        figure.appendChild(div);
        article.appendChild(figure);

        btnCreate.classList.add('addfavourite')
        btnQuit.classList.add('addfavourite', 'inactive')
        img.width = 200;
        img.height = 200;

        function ambas() {
            saveFavouriteMichis(michi.id);
            btnChange();
        }

        function btnChange () {
            btnCreate.classList.add('inactive')
            btnQuit.classList.toggle('inactive')
        }
        });
    }
};


async function loadFavouriteMichis() {
    const res = await fetch(API_URL_FAV);
    const data = await res.json();
    if (res.status !==200) {
        spanError.classList.toggle('inactive')
        spanError.innerText= `Ups, algo salió mal 
        error ${res.status}` 
    } else {
        const article = document.querySelector('.FavMichisArticle')
        article.innerHTML = '';
        data.forEach(michi => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            const div = document.createElement('div');
            const btnQuit = document.createElement('img');

            btnQuit.src = './iconos/pngwing.com (6).png';
            btnQuit.onclick = () => deleteFavouriteMichis(michi.id);
            div.appendChild(btnQuit);
            img.src = michi.image.url
            figure.appendChild(img);
            figure.appendChild(div);
            article.appendChild(figure);

            btnQuit.classList.add('addfavourite')
            img.width = 200;
            img.height = 200;
        });
    }
    console.log(data);
};
async function saveFavouriteMichis(id) {
    const res = await fetch(API_URL_FAV, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            image_id: id
        }),
    });
    const data = await res.json();
    console.log(data);
    loadFavouriteMichis();
}

async function deleteFavouriteMichis(id) {
    const res = await fetch(API_URL_FAV_DELETE(id), {
        method: 'DELETE',
    });
    const data = await res.json();
    loadFavouriteMichis();
}

    loadRandomMichis();
    loadFavouriteMichis();