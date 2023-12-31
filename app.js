const darkMode = document.querySelector(".dark-mode");
const body = document.querySelector('.body');
const filter = document.querySelector('.filter');
const dropdown = document.querySelector('.dropdown');
const moon = document.querySelector('.moon');
const countries = document.querySelector('.countries');
const country = document.querySelectorAll('.country');

fetch('https://countries-api-v7sn.onrender.com/countries?limit=16')
    .then(res => res.json())
    .then(data => aboutCountry(data))
    .catch(err => {
        console.log(err);
    })

function aboutCountry(data) {
    console.log(data);
    const newArray = Array.from(data.data);
    let newCoutries = '';
    newArray.forEach(function(el) {
        let newCoutry = `
        <div class="country w-[267px] cursor-pointer  color2 rounded-[5px] box-shadow2">
           <img class=" w-full h-[160px] shadow2 rounded-t-[5px]" src="${el.flags.png}" alt="">
           <div class="about-country pt-6 px-6 pb-[46px]">
                <h2 class="mb-4 text-lg  font-extrabold leading-[26px]">${el.name.common}</h2>
                <p class="mb-2  font-semibold">Population: <span class=" font-light">${el.population}</span></p>
                <p class="mb-2  font-semibold">Region: <span class=" font-light">${el.region}</span></p>
                <p class=" font-semibold">Capital: <span class="font-light ">${el.capital[0]}</span></p>
           </div>
        </div>`
        newCoutries += newCoutry;
    });
    countries.innerHTML = newCoutries;

}

darkMode.addEventListener('click', function() {
    document.querySelector('html').toggleAttribute('data-dark-mode');
    if (!moon.style.stroke) {
        moon.style.stroke = "#ffffff";
    } else if (moon.style.stroke == "rgb(255, 255, 255)") {
        moon.style.stroke = "#111517";
    } else if (moon.style.stroke == "rgb(17, 21, 23)") {
        moon.style.stroke = "#ffffff";
    }

})

filter.addEventListener('click', function() {

    if (dropdown.style.display !== "block") {
        dropdown.style.display = "block";
        console.log(dropdown.style.display);
        console.log('none');
        return;
    } else {
        dropdown.style.display = "none";
        console.log('block');
        return;
    }
})

// country.forEach(el => {
//     // console.log(el.h2.textContent);
//     console.log('bosildi');
// })

// window.addEventListener('click', function() {
//     if (event.target == country) {
//         console.log('ha');
//     } else {
//         console.log('yoq');
//     }
// })