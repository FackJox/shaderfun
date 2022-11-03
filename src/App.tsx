				import * as THREE from 'three'
				import { OrbitControls, PerspectiveCamera, BakeShadows } from "@react-three/drei";
				import { Canvas } from "@react-three/fiber";
				import { Perf } from "r3f-perf";
				import { Suspense } from "react";
				import { Male } from "./components/Male";
				import { MaleToonOutline } from "./components/MaleToonOutline";
				import { MaleShader } from "./components/MaleShader";
				import { MalePebbles } from "./components/MalePebbles"
				import { MaleTribal } from "./components/MaleTribal"

				import { Female } from "./components/Female";
				import { FemaleGround } from "./components/FemaleGround";
				import { FemaleUV } from "./components/FemaleUV";
				import { FemaleShader } from "./components/FemaleShader";

				function App() {

					const lightPos = new THREE.Vector3(0, 2, 2)

					return (
						<Canvas
						shadows= { true }
						>
							<color
								attach="background"
								args={["#f79f79"]}
					
							/>

							<Suspense fallback={null}>
								<OrbitControls />
								{/* <FemaleGround position={[1, 0, 0]} />
								<FemaleUV position={[2, 0, 0]} /> */}
								{/* <Female position={[0, 0, 0]} /> */}
								<FemaleShader position={[-1, 0, 0]} lightPos={lightPos}/>
								{/* <MaleToonOutline position={[-2, 0, 0]}/> */}
								{/* <MaleShader position={[-5, 0, 0]} />
								<Male />
								<MalePebbles position={[-2, 0, 0]}/>
								<MaleTribal position={[-1, 0, 0]}/> */}
								<ambientLight intensity={0.2} />
								<directionalLight
									castShadow
									position={lightPos}
									// intensity={1.0}
									shadow-mapSize={[1024, 1024]}
									shadow-camera-near={1}
									shadow-camera-far={10}
									shadow-camera-top={5}
									shadow-camera-right={5}
									shadow-camera-bottom={-5}
									shadow-camera-left={-5}
								/>
								<PerspectiveCamera
									makeDefault
									position={[0, 0, 2]}
								/>
								<mesh
									castShadow
									receiveShadow
									scale={10}
									rotation={[-Math.PI / 2, 0, 0]}
									position={[0, -1, 0]}
								>
									<planeGeometry args={[1, 1]} />
									<meshStandardMaterial color="#28AFB0" />
								</mesh>
								<BakeShadows />

							</Suspense>
							<Perf />
						</Canvas>
					);
				}

				export default App;
