import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

import Dictionary from './constants/Dictionary';

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 2000,
  },
};

export const sortData = data => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => a.cases > b.cases ? -1 : 1);
};

export const prettyPrintStat = (stat, plus = false) => {
  const plusSymb = plus ? '+' : '';
  return stat ? `${plusSymb}${numeral(stat).format("0.0a")}` : `${plusSymb}0`;
};

export const showDataOnMap = (data, classes, casesType = Dictionary.CASES.toLowerCase()) => (
  data.map(country => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
      key={country.country}
    >
      <Popup>
        <div className={classes.infoContainer}>
          <div
            className={classes.infoFlag}
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className={classes.infoName}>{country.country}</div>
          <div className={classes.infoConfirmed}>
            {`${Dictionary.CASES}: ${numeral(country.cases).format("0,0")}`}
          </div>
          <div className={classes.infoRecovered}>
            {`${Dictionary.RECOVERED}: ${numeral(country.recovered).format("0,0")}`}
          </div>
          <div className={classes.infoDeaths}>
            {`${Dictionary.DEATHS}: ${numeral(country.deaths).format("0,0")}`}
          </div>
        </div>
      </Popup>
    </Circle>
  ))
);
