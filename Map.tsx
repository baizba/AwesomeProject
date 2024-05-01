import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { LatLng, LeafletView } from 'react-native-leaflet-view';

const DEFAULT_COORDINATE: LatLng = {
  lat: 44.606388,
  lng: 17.859719,
};

const Map = () => {
  return (
      <View style={styles.root}>
        <LeafletView
          mapMarkers={[
            {
              position: DEFAULT_COORDINATE,
              icon: '📍',
              size: [32, 32],
            },
          ]}
          mapCenterPosition={DEFAULT_COORDINATE}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Map;