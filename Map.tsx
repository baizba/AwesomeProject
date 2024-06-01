import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import { LatLng, LeafletView } from 'react-native-leaflet-view';
import Geolocation from '@react-native-community/geolocation';

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState<LatLng | null>(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.error('Permission to access location was denied');
          return;
        }
      }
      getCurrentLocation();
    };

    const getCurrentLocation = () => {
      Geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        error => console.error(error),
        { enableHighAccuracy: true, distanceFilter: 0, interval: 1000, fastestInterval: 500 }
      );
    };

    requestLocationPermission();
  }, []);

  return (
    <View style={styles.root}>
      {currentPosition ? (
        <LeafletView
          mapMarkers={[
            {
              position: currentPosition,
              icon: '📍',
              size: [32, 32],
            },
          ]}
          mapCenterPosition={currentPosition}
        />
      ) : (
        <Text>Loading...</Text>
      )}
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
