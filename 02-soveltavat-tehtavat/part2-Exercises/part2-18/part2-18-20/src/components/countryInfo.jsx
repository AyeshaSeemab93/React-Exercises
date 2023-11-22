
const CountryInfo = ({country})=>{
  return(
    <div>
    <h2>{country.name.common}</h2>
    <p>Capital: {country.capital[0]}</p>
    <p>Population: {country.population}</p>
    <p>Region: {country.region}</p>
    <p>Subregion: {country.subregion}</p>
    <p>Language: {country.languages[Object.keys(country.languages)[0]]}</p>
    <img src={country.flags.png} />
  </div>
  )
}

export default CountryInfo;
