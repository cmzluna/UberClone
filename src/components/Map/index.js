import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {selectOrigin} from 'src/redux/slices/navigation/selectors/selectOrigin';
import {selectDestination} from 'src/redux/slices/navigation/selectors/selectDestination';
import MapViewDirections from 'react-native-maps-directions';
import {STADIA_API_KEY} from '@env';
import getCurrentLocation from 'src/utils/getCurrentLocation';
import MapLibreGL from '@maplibre/maplibre-react-native';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});

const styleUrl = `https://tiles.stadiamaps.com/styles/alidade_smooth.json?api_key=${STADIA_API_KEY}`;
console.log('styleUrl -> ', styleUrl);

// node_modules FIXED  https://github.com/maplibre/maplibre-gl-native/issues/283
const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  const {
    location: {lat: originLat, lng: originLng},
    description: originDesc,
  } = origin;

  const {
    location: {lat: destinationLat, lng: destinationLng},
    description: destinationDesc,
  } = destination;

  const isValidOrigin =
    !!origin && !!Object.keys(origin).length && !!originLat && !!originLng;

  const isValidDestination =
    !!destination &&
    !!Object.keys(destination).length &&
    !!destinationLat &&
    !!destinationLng;

  const parsedOrigin = {
    latitude: originLat,
    longitude: originLng,
  };

  const parsedDestination = {
    latitude: destinationLat,
    longitude: destinationLng,
  };

  const directionsErrHandler = err => {
    console.log('====================== open toast ==============');
    console.log('Error => ', err);
    console.log('====================================');
  };

  useEffect(() => {
    if (!origin || !destination) return;

    console.log('aca! *********', JSON.stringify(destination));

    // mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
    //   edgePadding: {top: 200, right: 200, bottom: 20, left: 200},
    // });

    // const {
    //   coords: {latitude, longitude},
    // } = getCurrentLocation();
  }, [origin, destination]);

  return (
    <MapLibreGL.MapView
      style={styles.map}
      logoEnabled={false}
      styleURL={styleUrl}>
      <MapLibreGL.Camera
        defaultSettings={{
          centerCoordinate: [2.3210938, 48.8565913],
          zoomLevel: 5,
        }}
      />

      <MapLibreGL.MarkerView
        coordinate={[-0.124589, 51.500741]}
        children={
          <Image
            source={{
              uri: 'https://www.jawg.io/docs/images/icons/big-ben.png',
            }}
            style={{width: 25, height: 25}}
          />
        }
        anchor={{x: 0, y: 0.5}}
      />
      <MapLibreGL.ShapeSource
        id="marker-source"
        shape={{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [2.294694, 48.858093],
          },
        }}>
        <MapLibreGL.SymbolLayer
          id="marker-layer"
          style={{
            iconImage: 'https://www.jawg.io/docs/images/icons/eiffel-tower.png',
            iconSize: 0.5,
          }}
        />
      </MapLibreGL.ShapeSource>
    </MapLibreGL.MapView>

    // isValidOrigin && (
    //   <MapView
    //     ref={mapRef}
    //     provider={PROVIDER_GOOGLE}
    //     style={styles.map}
    //     initialRegion={{
    //       latitude: originLat,
    //       longitude: originLng,
    //       latitudeDelta: 0.0922,
    //       longitudeDelta: 0.0421,
    //     }}>
    //     {isValidOrigin && isValidDestination && (
    //       <MapViewDirections
    //         origin={parsedOrigin}
    //         destination={parsedDestination}
    //         apikey={GOOGLE_API_KEY}
    //         strokeWidth={2.5}
    //         strokeColor="black"
    //         onError={directionsErrHandler}
    //       />
    //     )}
    //     <Marker
    //       coordinate={{
    //         latitude: originLat,
    //         longitude: originLng,
    //       }}
    //       title="Origin"
    //       description={originDesc}
    //       identifier="origin"
    //     />
    //     {isValidDestination && (
    //       <Marker
    //         coordinate={{
    //           latitude: destinationLat,
    //           longitude: destinationLng,
    //         }}
    //         title="Destination"
    //         description={destinationDesc}
    //         identifier="destination"
    //       />
    //     )}
    //   </MapView>
    // )
  );
};

export default Map;
