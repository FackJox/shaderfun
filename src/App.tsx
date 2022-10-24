import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Female } from "./components/Female";
import { Male } from "./components/Male";
import { Suspense } from "react";

function App() {
	return (
		<Canvas>
			<color
				attach="background"
				args={["#f79f79"]}
			/>

			<Suspense fallback={null}>
				<OrbitControls />
				<Female />
				<Male />
				<ambientLight intensity={1} />
				<PerspectiveCamera
					makeDefault
					position={[0, 0, 2]}
				/>
			</Suspense>
		</Canvas>
	);
}

export default App;
