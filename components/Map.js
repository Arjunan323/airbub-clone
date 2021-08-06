import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coOrdinates = searchResults.map((result) => ({
    latitude: result.long,
    longitude: result.lat,
  }));

  const center = getCenter(coOrdinates);

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/arjunan97/cks0i4otp117p17pdy4rbxk13"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewPort}
      onViewportChange={(nextviewPort) => setViewPort(nextviewPort)}
    >
      {searchResults.map((res) => (
        <div key={res.long}>
          <Marker
            latitude={res.lat}
            longitude={res.long}
            offsetLeft={0}
            offsetTop={0}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(res)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              ⚓
            </p>
            {selectedLocation.long == res.long ? (
              <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={true}
                latitude={res.lat}
                longitude={res.long}
              >
                {res.title}
              </Popup>
            ) : (
              false
            )}
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
