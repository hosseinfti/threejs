import "./App.css";
import {
  Scene,
  SphereGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  PointLight,
} from "three";
import { useEffect, useRef } from "react";
import useWindowSize from "./utils/useWindowSize";
import { OrbitControls } from "three/examples/jsm/Addons.js";

function App() {
  const sceneRef = useRef<HTMLCanvasElement | null>(null);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (sceneRef?.current) {
      const sizes = {
        width: windowSize.width,
        height: windowSize.height,
      };
      //scene
      const scene = new Scene();
      const geometry = new SphereGeometry(3, 64, 64);
      const material = new MeshBasicMaterial({
        color: "#00ff83",
      });

      //mesh
      const mesh = new Mesh(geometry, material);
      scene.add(mesh);

      //light
      const light = new PointLight(0xff0000);
      light.position.set(10, 10, 10);
      scene.add(light);

      //camera
      const camera = new PerspectiveCamera(
        25,
        sizes.width / sizes.height,
        10,
        100
      );
      camera.position.z = 51;
      scene.add(camera);

      //render
      let canvas = sceneRef.current;
      const renderer = new WebGLRenderer({ canvas });
      renderer.setSize(sizes.width, sizes.height);
      renderer.render(scene, camera);

      const controls = new OrbitControls(camera, canvas);
      //   mesh.position.x += 100;
      //   camera.updateProjectionMatrix();
    }
  }, [sceneRef, windowSize]);

  //   useEffect(() => {
  //     //resize

  //   }, [windowSize]);

  return <canvas ref={sceneRef}></canvas>;
}

export default App;
