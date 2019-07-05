// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Module ,Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [
      new surfaceModule(),
    ],
    ...options,
  });

  surface = r360.getDefaultSurface();
  r360.renderToSurface(
    r360.createRoot('SurfaceVR', {}),
    surface
  );
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

class surfaceModule extends Module {
  constructor() {
    super('surfaceModule');
  }

  resizeSurface(width, height) {
    surface.resize(width, height)
  }

  changeSurfaceType(Type) {
    Type === "Flat" ? surface.setShape(Surface.SurfaceShape.Flat) : surface.setShape(Surface.SurfaceShape.Cylinder);
  }
}


window.React360 = {init};
