import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  VrButton
} from 'react-360';

import {Surface} from 'react-360-web';
const surfaceModule = NativeModules.surfaceModule;

export default class SurfaceVR extends React.Component {
  state = {
    width: 1000,
    height: 600
  }

  changeSurfaceDimensions() {
    surfaceModule.resizeSurface(500, 300);
    this.setState({width: 500, height: 300});
  }

  changeSurfaceShape(type) {
    if (type === "Flat") {
      surfaceModule.changeSurfaceType("Flat");
    } else {
      surfaceModule.changeSurfaceType("Cylinder");
    }
  }

  render() {
    return (
      <View style={[styles.panel, {width: this.state.width, height: this.state.height}]}>
        <VrButton style={styles.greetingBox} onClick={() => this.changeSurfaceDimensions()}>
          <Text>Change Width & Length</Text>
        </VrButton>

        <VrButton style={styles.greetingBox} onClick={() => this.changeSurfaceShape("Flat")}>
          <Text>Flat Shape</Text>
        </VrButton>

        <VrButton style={styles.greetingBox} onClick={() => this.changeSurfaceShape("Cylinder")}>
          <Text>Cylinder Shape</Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    width: 200,
    height: 100,
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
