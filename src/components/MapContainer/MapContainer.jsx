import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = (props) => {
  console.log({ lat: props.lat, lng: props.lon });
  return (
    <Map
      google={props.google}
      containerStyle={{
        marginLeft: "15%",
        maxWidth: "30%",
        maxHeight: "30%",
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
