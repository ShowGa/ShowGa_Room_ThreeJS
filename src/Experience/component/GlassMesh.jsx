const GlassMesh = ({ nodes }) => {
    return (
        <mesh
            geometry={nodes.Fridge_Glass.geometry}
            position={[-1.332, 0.708, 0.388]}
            scale={0.375}
        >
            <meshPhysicalMaterial
                // transparent
                transmission={1}
                roughness={0}
                clearcoat={1}
                clearcoatRoughness={0}
                // envMapIntensity={2}
                ior={1}
                reflectivity={0.1}
            />
        </mesh>
    );
};

export default GlassMesh;
