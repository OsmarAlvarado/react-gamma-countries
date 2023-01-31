
import NavBar from './Components/Navbar';
import CountryDetails from './Components/CountryDetails';
import CountriesList from './Components/CountriesList';


import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <CountriesList />
      </div>
      <div>
      <Route path='/projects/:countryId' element={<CountryDetails />} />
      </div>

    </div>
  );
}

export default App;
