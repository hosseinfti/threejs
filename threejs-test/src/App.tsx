import './App.css'
import {Scene, SphereGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, WebGLRenderer, PointLight} from "three"
import {useEffect, useRef} from "react";


function App() {

    const sceneRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        if (sceneRef?.current) {

            //scene
            const scene = new Scene();
            const geometry = new SphereGeometry(3, 64, 64)
            const material = new MeshBasicMaterial({
                color: "#00ff83",
            })

            //mesh
            const mesh = new Mesh(geometry, material)
            scene.add(mesh)

            //light
            const light = new PointLight(0xff0000, 1, 100)
            light.position.set(50, 50, 50)
            scene.add(light)

            //camera
            const camera = new PerspectiveCamera(45, 800 / 600, 1, 1000)
            camera.position.z = 20
            scene.add(camera)

            //render
            let canvas = sceneRef.current
            const renderer = new WebGLRenderer({canvas})
            renderer.setSize(800, 600)
            renderer.render(scene, camera)

        }

    }, [sceneRef])


    return (
        <canvas ref={sceneRef}></canvas>
    )
}

export default App
