/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Nikolai Jonasson (https://sketchfab.com/nikolaijonasson)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/female-marble-statue-polished-but-old-41b024813afd49fb827d942219d89b93
title: Female Marble Statue (Polished but old)
*/

import * as THREE from "three";
import { useRef } from "react";
import { useGLTF, useTexture, shaderMaterial } from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import TunnelFragment from "../shaders/tunnel/fragment.glsl";
import TunnelVertex from "../shaders/tunnel/vertex.glsl";

// type GLTFResult = GLTF & {
// 	nodes: {
// 		defaultMaterial: THREE.Mesh;
// 		defaultMaterial_1: THREE.Mesh;
// 	};
// 	materials: {
// 		Eye_brown: THREE.MeshStandardMaterial;
// 		Material_001: THREE.MeshStandardMaterial;
// 	};
// };



const FemaleShaderMaterial = shaderMaterial(
	{
		iGlobalTime: 0,
		iChannel0: { type: "t", value: new THREE.Texture() },
		iChannel1: { type: "t", value: new THREE.Texture() },
	},
	TunnelVertex,
	TunnelFragment
);
extend({ FemaleShaderMaterial });


export function Female(props) {
	const { nodes, materials } = useGLTF(
		"female_marble_statue_polished_but_old.glb"
	) 

	const femaleShaderMaterialRef = useRef();

	const [ceramicTexture, colourfulWoodTexture] = useTexture([
		"/textures/tiles/VintageRusticCeramicFloor_diffuseOriginal.jpg",
		"/textures/colorfulwood/Colorful_Painted_Wood_Base_Color.jpg",
	]);

	useFrame((state, delta) => {
		femaleShaderMaterialRef.current.iGlobalTime += delta;
		// console.log(maleShaderMaterialRef.current.iGlobalTime)
	});

	return (
		<group
			{...props}
			dispose={null}
		>
			<group
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.93}
				position={[1, 0, 0]}
			>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.defaultMaterial.geometry}
						// material={materials.Eye_brown}
					>
				<femaleShaderMaterial
						ref={femaleShaderMaterialRef}
						side={THREE.DoubleSide}
						iChannel0={ceramicTexture}
	
						iChannel0-wrapS={THREE.RepeatWrapping}
						iChannel0-wrapT={THREE.RepeatWrapping}
						iChannel1={colourfulWoodTexture}
						iChannel1-wrapS={THREE.RepeatWrapping}
						iChannel1-wrapT={THREE.RepeatWrapping}
					/>

					</mesh>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.defaultMaterial_1.geometry}
						material={materials.Material_001}
					>

					</mesh>
								<mesh
					rotation={[0, 0, 0]}
					position={[0, 0.75, -2]}
				>
					<planeGeometry args={[7, 3.94, 1, 1]} />
					<femaleShaderMaterial
						ref={femaleShaderMaterialRef}
						side={THREE.DoubleSide}
						iChannel0={ceramicTexture}
						iChannel0-wrapS={THREE.RepeatWrapping}
						iChannel0-wrapT={THREE.RepeatWrapping}
						iChannel1={colourfulWoodTexture}
						iChannel1-wrapS={THREE.RepeatWrapping}
						iChannel1-wrapT={THREE.RepeatWrapping}
					/>
					{/* <meshBasicMaterial color="orange" /> */}
				</mesh>
	
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("female_marble_statue_polished_but_old.glb");