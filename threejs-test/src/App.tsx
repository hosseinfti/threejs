import './App.css';
import {
    Scene,
    // BoxGeometry,
    // MeshBasicMaterial,
    // Mesh,
    PerspectiveCamera,
    WebGLRenderer,
    LineBasicMaterial,
    // PointLight,
    BufferGeometry,
    Vector3,
    Line,
} from 'three';
import {
    // useEffect,
    useRef,
} from 'react';
import useWindowSize from './utils/useWindowSize';
import TitleDescription from './components/TitleDescription';
import ExcelUpload from './components/ExcelUpload';
import * as React from 'react';
// import { OrbitControls } from 'three/examples/jsm/Addons.js';
// import WebGL from 'three/addons/capabilities/WebGL.js';
import fa from './assets/texts/fa.json';
import {ThemeProvider} from '@mui/material/styles';
import {CacheProvider} from '@emotion/react';
import {CssBaseline, Typography} from '@mui/material';
import {cacheRtl} from 'datami-ui-kit/dist/esm/theme/Theme';
import {createTheme} from 'datami-ui-kit';
import {Box} from '@mui/system';
// import { cacheRtl, lightTheme } from './theme/theme';
import Highlighter from "lifeweb-text-highlighter";
import {ColorsPrimaryMain} from "datami-ui-kit/dist/esm/style-dictionary-dist/tokens";
import {saveAs} from 'file-saver';
// import edgesSample from "../public/excel/edgesSample.xlsx"


//
function App() {
    const sceneRef = useRef<HTMLCanvasElement>();
    //
    const windowSize = useWindowSize();
    //
    //     // useEffect(() => {
    //     //   if (sceneRef?.current) {
    //     //     const sizes = {
    //     //       width: windowSize.width,
    //     //       height: windowSize.height,
    //     //     };
    //     //     //scene
    //     //     const scene = new Scene();
    //     //     const geometry = new BoxGeometry(1, 1, 1);
    //     //     const material = new MeshBasicMaterial({
    //     //       color: "#00ff83",
    //     //     });
    //     //
    //     //     //mesh
    //     //     const mesh = new Mesh(geometry, material);
    //     //     scene.add(mesh);
    //     //
    //     //     // //light
    //     //     // const light = new PointLight(0xff0000);
    //     //     // light.position.set(10, 10, 10);
    //     //     // scene.add(light);
    //     //
    //     //     //camera
    //     //     const camera = new PerspectiveCamera(
    //     //       25,
    //     //       sizes.width / sizes.height,
    //     //       10,
    //     //       100
    //     //     );
    //     //     camera.position.z = 51;
    //     //     scene.add(camera);
    //     //
    //     //     //render
    //     //     let canvas = sceneRef.current;
    //     //     const renderer = new WebGLRenderer({ canvas });
    //     //     renderer.setSize(sizes.width, sizes.height);
    //     //       mesh.rotation.x += 0.01;
    //     //       mesh.rotation.y += 0.01;
    //     //     renderer.render(scene, camera);
    //     //
    //     //         const animate = () => {
    //     //             requestAnimationFrame(animate);
    //     //             renderer.render(scene, camera);
    //     //         }
    //     //         animate();
    //     //     // const controls = new OrbitControls(camera, canvas);
    //     //     //   mesh.position.x += 100;
    //     //     //   camera.updateProjectionMatrix();
    //     //   }
    //     // }, [sceneRef, windowSize]);
    //
    //     //   useEffect(() => {
    //     //     //resize
    //
    //     //   }, [windowSize]);
    //
    //     // if (sceneRef?.current) {
    //     const sizes = {
    //         width: windowSize?.width || 500,
    //         height: windowSize?.height || 500,
    //     };
    //     //scene
    //     const scene = new Scene();
    //     const geometry = new BoxGeometry(1, 1, 1);
    //     const material = new MeshBasicMaterial({
    //         color: "#00ff83",
    //     });
    //
    //     //mesh
    //     const mesh = new Mesh(geometry, material);
    //     scene.add(mesh);
    //
    //     // light
    //     // const light = new PointLight(0xff0000);
    //     // light.position.set(10, 10, 10);
    //     // scene.add(light);
    //
    //     // camera
    //     const camera = new PerspectiveCamera(
    //         25,
    //         sizes.width / sizes.height,
    //         10,
    //         100
    //     );
    //     camera.position.z = 51;
    //     scene.add(camera);
    //
    //     //render
    //     let canvas = sceneRef.current;
    //     const renderer = new WebGLRenderer();
    //     renderer.setSize(sizes.width, sizes.height);
    //     mesh.rotation.x += 0.01;
    //     mesh.rotation.y += 0.01;
    //     document.body.appendChild(renderer.domElement);
    //     // renderer.render(scene, camera);
    //
    //     // const controls = new OrbitControls(camera, canvas);
    //     //   mesh.position.x += 100;
    //     //   camera.updateProjectionMatrix();
    //     function animate() {
    //         requestAnimationFrame(animate);
    //         renderer.render(scene, camera);
    //     }
    //
    //     animate();
    //
    //     // }
    //
    //

    const sizes = {
        width: windowSize.width,
        height: windowSize.height,
    };
    const scene = new Scene();
    const camera = new PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        1000
    );

    // const renderer = new WebGLRenderer();

    const canvas = sceneRef.current;
    const renderer = new WebGLRenderer({canvas});
    renderer.setSize(sizes.width, sizes.height);
    // document.body.appendChild( renderer.domElement );

    // const geometry = new BoxGeometry(1, 1, 1);
    const points = [];
    const maxEdge = 50;
    const length = 2;
    for (let i = 0; i < maxEdge; i++) {
        const _points: any[] = [];
        for (let j = 0; j < 1; j++) {
            points.push(new Vector3(i, -length, 0));
            points.push(new Vector3(0, length, 0));
        }
        points.push(..._points);
    }
    // points.push(new Vector3(0, 1.2, 0));
    // points.push(new Vector3(0, -1.2, 0));
    // points.push(new Vector3(0, 1.2, 0));
    // points.push(new Vector3(1, -1.2, 0));
    // points.push(new Vector3(0, 1.2, 0));
    // points.push(new Vector3(2, -1.2, 0));
    // points.push(new Vector3(0, 1.2, 0));
    // points.push(new Vector3(3, -1.2, 0));
    // points.push(new Vector3(0, 1.2, 0));
    // points.push(new Vector3(4, -1.2, 0));
    // points.push(new Vector3(0, 1.2, 0));
    // points.push(new Vector3(5, -1.2, 0));
    // points.push(new Vector3(0, 1.2, 0));
    // points.push(new Vector3(5, 1, 0));
    // points.push(new Vector3(0, 0, 0));
    // points.push(new Vector3(0, 9, 0));
    // points.push(new Vector3(10, 0, 0));
    const geometry = new BufferGeometry().setFromPoints(points);

    const material = new LineBasicMaterial({color: 0x00ff00});

    // const material = new MeshBasicMaterial({color: 0x00ff00});
    const line = new Line(geometry, material);
    // const cube = new Mesh(geometry, material);
    scene.add(line);

    camera.position.set(0, 0, 20);
    camera.lookAt(30, 0, 0);

    function animate() {
        renderer.render(scene, camera);
    }

    // function animate() {
    //     requestAnimationFrame(animate);
    //
    //     line.rotation.x += 0.01;
    //     line.rotation.y += 0.01;
    //
    //     renderer.render(scene, camera);
    // }

    // //  check if devices or browsers support WebGL
    // if (WebGL.isWebGLAvailable()) {
    //
    //     // Initiate function or other initializations here
    //     animate();
    // } else {
    //     const warning = WebGL.getWebGLErrorMessage();
    //     if (canvas) {
    //         canvas.appendChild(warning);
    //     }
    // }
    // console.log(sceneRef)

    animate();

    const handleDownload = () => {
        const excelPath = "../public/excel/edgesSample.xlsx"
            const link = document.createElement(`a`);
            link.href = excelPath;
            link.setAttribute(`download`, `edgesSample.xlsx`);
            document.body.appendChild(link);
            link.click();
    }

    return (
        <Box
            sx={{
                marginInline: '8em ',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CacheProvider value={cacheRtl}>
                <ThemeProvider
                    theme={createTheme(
                        ['samim', 'vazir', 'tahoma', 'Arial', 'sans-serif'],
                        'samim',
                        'rtl'
                    )}
                >
                    <CssBaseline/>
                    {/*<canvas ref={sceneRef}></canvas>;*/}
                    <TitleDescription
                        title={fa['upload_nodes_csv']}
                        // description={fa['upload_csv_xlsx_description']}
                        description={<Highlighter
                            textToHighlight={fa['upload_csv_xlsx_description']}
                            caseSensitive={false}
                            searchWords={[{
                                text: "اینجا", onClick: () => {
                                },
                                style: {color: "blue"}
                            }]}
                        />}
                        bullets={[<Highlighter
                            textToHighlight={fa['edges_file_upload_require']}
                            caseSensitive={false}
                            searchWords={[{
                                text: "اينجا", onClick: () => {
                                    handleDownload()
                                },
                                style: {color: ColorsPrimaryMain, cursor: "pointer", backgroundColor: "unset"}
                            }]}
                        />, fa['max_file_size'],]}
                    />
                    <ExcelUpload/>
                </ThemeProvider>
            </CacheProvider>
        </Box>
    );
}

export default App;
