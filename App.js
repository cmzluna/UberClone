import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'src/redux/store';
import Main from 'src/screens/Main';
import MapLibreGL from '@maplibre/maplibre-react-native';

MapLibreGL.setAccessToken(null);

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
