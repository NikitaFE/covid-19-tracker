import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../../util";
import { MAP_URL, MAP_ATTRIBUTION } from '../../constants';
import "./Map.css";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom} minZoom={2} worldCopyJump={true}>
        <TileLayer
          url={MAP_URL}
          attribution={MAP_ATTRIBUTION}
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
