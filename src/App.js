import React, { useEffect, useState } from 'react';
import {
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent,
} from '@material-ui/core';
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  const getCountriesData = async () => {
    await fetch('https://disease.sh/v3/covid-19/countries')
      .then(res => res.json())
      .then(data => {
        const countries = data.map(country => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));

        setTableData(data);
        setCountries(countries);
      });
  };

  const getWorldwideInfo = async () => {
    await fetch('https://disease.sh/v3/covid-19/all')
      .then(res => res.json())
      .then(data => setCountryInfo(data));
  };

  const getCountryInfo = async (countryCode) => {
    const url = countryCode === 'worldwide'
      ? 'https://disease.sh/v3/covid-19/all'
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setCountryInfo(data);
      });
  };

  useEffect(() => {
    getCountriesData();
    getWorldwideInfo();
  }, []);

  const onCountryChange = async event => {
    const countryCode = event.target.value;
    setCountry(countryCode);
    getCountryInfo(countryCode);
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map(({ name, value }) => (
                <MenuItem key={name} value={value}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} /> 
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
        </div>

        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new cases</h3>
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
