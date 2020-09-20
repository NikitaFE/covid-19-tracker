import React, { useEffect, useState } from 'react';
import {
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent,
} from '@material-ui/core';
import Dictionary from '../../constants/Dictionary';
import { URL, tails } from '../../constants/api';
import { MAP_CENTER, MIN_ZOOM, COUNTRY_ZOOM } from '../../constants';
import { sortData, prettyPrintStat } from '../../util';
import InfoBox from '../InfoBox';
import Map from '../Map';
import Table from '../Table';
import LineGraph from '../LineGraph';
import 'leaflet/dist/leaflet.css';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(Dictionary.WORLDWIDE.toLowerCase());
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState(MAP_CENTER);
  const [mapZoom, setMapZoom] = useState(MIN_ZOOM);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState(Dictionary.CASES.toLowerCase());

  const getCountriesData = async () => {
    await fetch(`${URL}${tails.COUNTRIES}`)
      .then(res => res.json())
      .then(data => {
        const sortedData = sortData(data);
        const countries = data.map(country => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));

        setTableData(sortedData);
        setMapCountries(data);
        setCountries(countries);
      });
  };

  const getWorldwideInfo = async () => {
    await fetch(`${URL}${tails.ALL}`)
      .then(res => res.json())
      .then(data => setCountryInfo(data));
  };

  const getCountryInfo = async countryCode => {
    const url = countryCode === Dictionary.WORLDWIDE.toLowerCase()
      ? `${URL}${tails.ALL}`
      : `${URL}${tails.COUNTRIES}/${countryCode}`;

    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);
        if (countryCode === Dictionary.WORLDWIDE.toLowerCase()) {
          setMapCenter(MAP_CENTER);
          setMapZoom(MIN_ZOOM);
        } else {
          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
          setMapZoom(COUNTRY_ZOOM);
        }
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
          <h1>{Dictionary.MAIN_TITLE}</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value={Dictionary.WORLDWIDE.toLowerCase()}>{Dictionary.WORLDWIDE}</MenuItem>
              {countries.map(({ name, value }) => (
                <MenuItem key={name} value={value}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox
            isRed
            active={casesType === Dictionary.CASES.toLowerCase()}
            onClick={() => setCasesType(Dictionary.CASES.toLowerCase())}
            title={Dictionary.CORONAVIRUS_CASES}
            cases={prettyPrintStat(countryInfo.todayCases, true)}
            total={prettyPrintStat(countryInfo.cases)}
          /> 
          <InfoBox
            active={casesType === Dictionary.RECOVERED.toLowerCase()}
            onClick={() => setCasesType(Dictionary.RECOVERED.toLowerCase())}
            title={Dictionary.RECOVERED}
            cases={prettyPrintStat(countryInfo.todayRecovered, true)}
            total={prettyPrintStat(countryInfo.recovered)}
          />
          <InfoBox
            isRed
            active={casesType === Dictionary.DEATHS.toLowerCase()}
            onClick={() => setCasesType(Dictionary.DEATHS.toLowerCase())}
            title={Dictionary.DEATHS}
            cases={prettyPrintStat(countryInfo.todayDeaths, true)}
            total={prettyPrintStat(countryInfo.deaths)}
          />
        </div>

        <Map countries={mapCountries} casesType={casesType} center={mapCenter} zoom={mapZoom} />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3 className="app__table-title">{Dictionary.LIVE_CASES_BY_COUNTRY}</h3>
          <Table countries={tableData} />
          <h3 className="app__graph-title">{`${Dictionary.WORLDWIDE_NEW} ${casesType}`}</h3>
          <LineGraph className="app__graph" casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
