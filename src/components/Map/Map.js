import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import PropTypes from 'prop-types';

import { showDataOnMap } from "../../util";
import { MAP_URL, MAP_ATTRIBUTION } from '../../constants';

import useStyles from "./Map.styled.js";

function Map({ countries, casesType, center, zoom }) {
  const classes = useStyles();

  return (
    <div className={classes.map}>
      <LeafletMap center={center} zoom={zoom} minZoom={2} worldCopyJump={true}>
        <TileLayer
          url={MAP_URL}
          attribution={MAP_ATTRIBUTION}
        />
        {showDataOnMap(countries, classes, casesType)}
      </LeafletMap>
    </div>
  );
};

Map.propTypes = {
  countries: PropTypes.array.isRequired,
  casesType: PropTypes.string.isRequired,
  center: PropTypes.shape({ lat: PropTypes.number, lng: PropTypes.number, }),
  zoom: PropTypes.number.isRequired,
};

Map.defaultProps = {
  countries: [],
  casesType: 'cases',
  center: {
    lat: 2,
    lng: 2,
  },
  zoom: 2,
};

export default Map;
