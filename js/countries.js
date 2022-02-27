


const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = counties => {
    const countriesDiv = document.getElementById('countries');
    
    counties.forEach(country => {
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        div.classList.add('country');
        div.innerHTML = `<h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>`;
   
        // h3.innerText = country.name.common;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
       
        countriesDiv.appendChild(div);

        // console.log(country.capital);
        
        
    });
    
    
}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetailes(data[0]));

}

const displayCountryDetailes = country => {
    // console.log(country.flags.png);
    const countryDiv = document.getElementById('country-detail');
    
    countryDiv.innerHTML = `<h3>name: ${country.name.common}</h3><p>capital: ${country.capital}</p>
    <h4>population: ${country.population}</h4>
    <img src="${country.flags.png}">
    `;
    
}








