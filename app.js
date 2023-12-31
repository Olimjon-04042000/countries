const darkMode = document.querySelector(".dark-mode");
const body = document.querySelector('.body');
const filter = document.querySelector('.filter');
const dropdown = document.querySelector('.dropdown');
const moon = document.querySelector('.moon');
const countries = document.querySelector('.countries');
const country = document.querySelectorAll('.country');
const main = document.querySelector('main');
const newPage = document.querySelector('.new-page');

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
        <div class="country w-[267px] cursor-pointer  color2 rounded-[5px] box-shadow2 " onclick="moreInformation('${el.name.common}', '${el.population}', '${el.region}', '${el.capital[0]}','${el.flags.png}','${el.name.nativeName}','${el.subregion}','${el.languages}','${el.currencies}')">
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

function moreInformation(name, population, region, capital, flags, nativeName, subregion, lang, currencies) {
    if (main.style.display == "block") {
        main.style.display = "none";
        newPage.style.display = "block";
    } else {
        main.style.display = "block";
        newPage.style.display = "none";
    }


    console.log("Nomi " + name);
    let a = `
    <div class="container max-w-[1280px]  mx-auto">
            <div class="back rounded-md flex gap-[10px] cursor-pointer py-[10px] px-8 items-center w-[130px] mb-20 color2 box-shadow3" onclick="oldPage()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z" fill="#111517"/>
              </svg>
                <span>Back</span>
            </div>
            <div class=" flex justify-between">
                <img class="w-[560px] h-[400px] rounded-[8px]" src="${flags}" alt="">
                <div class="info mt-[39px]">
                    <h2 class="name text-[32px] font-extrabold mb-6">${name}</h2>
                    <div class="about flex justify-between max-w-[598px] mb-[68px]">
                        <div class="">
                            <p class=" font-semibold">Native Name: <span class="native-name font-light">${nativeName}</span></p>
                            <p class=" font-semibold">Population: <span class="population font-light"> ${population}</span></p>
                            <p class=" font-semibold">Region: <span class="region font-light">${region}</span></p>
                            <p class=" font-semibold">Sub Region: <span class="sub-region font-light">${subregion}</span></p>
                            <p class=" font-semibold">Capital: <span class="capital font-light">${capital}</span></p>
                        </div>
                        <div class="">
                            <p class=" font-semibold">Top Level Domain: <span class="domain font-light">.be</span></p>
                            <p class=" font-semibold">Currencies: <span class="currencies font-light">${currencies}</span></p>
                            <p class=" font-semibold">Languages: <span class="lang font-light">${lang}</span></p>
                        </div>
                    </div>
                    <div class=" flex gap-[10px]">
                        <p class="font-semibold ">Border Countries: </p>
                        <button class="text-sm font-light color2  py-[5px]  border-0 rounded-sm border-[#979797] box-shadow3 w-24">France</button>
                        <button class="text-sm font-light color2 py-[5px]  border-0 rounded-sm border-[#979797] box-shadow3 w-24">Germany</button>
                        <button class="text-sm font-light color2 py-[5px]  border-0 rounded-sm border-[#979797] box-shadow3 w-24">Netherlands</button>
                    </div>
                </div>
            </div>
        </div>`
    newPage.innerHTML = a;
}

function oldPage() {
    main.style.display = "block";
    newPage.style.display = "none";
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