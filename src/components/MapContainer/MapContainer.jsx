import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = (props) => {
  // console.log({ lat: props.lat, lng: props.lon, marginLeft: props.marginLeft, maxWidth: props.maxWidth, maxHeight: props.maxHeight });
  return (
    <Map
      google={props.google}
      containerStyle={{
        marginLeft: props.marginLeft,
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,
        borderRadius: props.borderRadius,
      }}
      initialCenter={{ lat: Number(props.lat), lng: Number(props.lon) }}
      zoom={10}
      center={{ lat: Number(props.lat), lng: Number(props.lon) }}
    >
      <Marker
        position={{ lat: Number(props.lat), lng: Number(props.lon) }}
      ></Marker>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API,
})(MapContainer);

//AIzaSyBULrINzFDHfHArvtt06VnywGhtdOzD7aE