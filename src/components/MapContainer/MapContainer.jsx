import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = (props) => {
  console.log({ lat: props.lat, lng: props.lon });
  return (
    <Map
      google={props.google}
      containerStyle={{
        width: "50em",
        height: "30em",
        position: "relative",
      }}
      initialCenter={{ lat: Number(props.lat), lng: Number(props.lon) }}
      zoom={10}
    >
      <Marker
        position={{ lat: Number(props.lat), lng: Number(props.lon) }}
      ></Marker>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBULrINzFDHfHArvtt06VnywGhtdOzD7aE",
})(MapContainer);
