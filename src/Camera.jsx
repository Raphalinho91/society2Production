import { useGLTF } from "@react-three/drei";

export function Camera(props) {
  const { nodes, materials } = useGLTF("/camera.glb");
  return (
    <group scale={[20, 20, 20]} {...props} dispose={null}>
      <group position={[0.002, 0.002, -0.007]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.material_1}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.material}
        position={[0.002, 0.027, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.material}
        position={[0.002, 0.027, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.material}
        position={[0.002, 0.027, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_25.geometry}
        material={materials.material}
        position={[0.088, -0.075, 0.018]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_27.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_29.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_31.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_33.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_35.geometry}
        material={materials.material}
        position={[0.008, 0.001, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_37.geometry}
        material={materials.material}
        position={[0.016, -0.003, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_39.geometry}
        material={materials.material}
        position={[0.008, 0.001, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_41.geometry}
        material={materials.material}
        position={[0.002, 0.001, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_43.geometry}
        material={materials.material}
        position={[0.002, 0.001, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_45.geometry}
        material={materials.material}
        position={[0.003, 0.002, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_47.geometry}
        material={materials.material}
        position={[0.003, 0.002, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_49.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_51.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_53.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_55.geometry}
        material={materials.material}
        position={[-0.102, -0.036, 0.098]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_57.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_59.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_61.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_63.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_65.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_67.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_69.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_71.geometry}
        material={materials.material}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_73.geometry}
        material={materials.Glass}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_75.geometry}
        material={materials.Screen}
        position={[0.002, 0.002, -0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_77.geometry}
        material={materials.Glass}
        position={[0.002, 0.002, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_79.geometry}
        material={materials.material}
        position={[0.098, -0.069, 0.087]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.013}
      />
    </group>
  );
}

useGLTF.preload("/camera.glb");
