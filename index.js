import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  VrButton
} from 'react-360';

const surfaceModule = NativeModules.surfaceModule;

export default class SurfaceVR extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <VrButton>
          <Text>Change Dim.</Text>
        </VrButton>
        <VrButton>
          <Text>Flat</Text>
        </VrButton>
        <VrButton>
          <Text>Cylinder</Text>
        </VrButton>
        <VrButton>
          <Text>Reset</Text>
        </VrButton>
        <VrButton>
          <Text>Destroy</Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('SurfaceVR', () => SurfaceVR);
