import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(countries);
  const handleAddCountry = (country) => {
    setCart([...cart, country]);
  }
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []);
  return (
    <div>
      <h1>Country Loaded: {countries.length}</h1>
      <Cart cart={cart}/>
      {countries.map(country => <Country key={country.alpha2Code} country={country} handleAddCountry={handleAddCountry}/>)}
    </div>
  );
}

export default App;
