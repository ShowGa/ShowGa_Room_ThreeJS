import EmissionMesh from "./EmissionMesh";

const Emission = ({ nodes }) => {
    const emissionObjsData = [
        {
            key: "hologramProjector_emission",
            position: [0.566, 0.386, -0.059],
            rotation: null,
            node: nodes.HologramProjector_Emission,
        },
        {
            key: "emission_keyboard",
            position: [-1.267, 0.607, -0.352],
            rotation: [0, -Math.PI / 6, Math.PI / 2],
            node: nodes.Emission_Keyboard,
        },
        {
            key: "emission_fridge",
            position: [-1.354, 0.708, 0.388],
            rotation: null,
            node: nodes.Emission_Fridge,
        },
        {
            key: "emission_wallEdge_1",
            position: [0.032, 1.069, -1.498],
            rotation: [-Math.PI / 2, -Math.PI / 2, 0],
            node: nodes.Emission_WallEdge_1,
        },
        {
            key: null,
            position: [-1.748, 1.069, -0.032],
            rotation: [0, 0, Math.PI / 2],
            node: nodes.Emission_WallEdge_2,
        },
    ];

    return emissionObjsData.map((objData) => (
        <EmissionMesh objData={objData} />
    ));
};

export default Emission;

/*

<mesh
    castShadow
    receiveShadow
    geometry={nodes.HologramProjector_Emission.geometry}
    material={nodes.HologramProjector_Emission.material}
    position={[0.566, 0.386, -0.059]}
/>
<mesh
    castShadow
    receiveShadow
    geometry={nodes.Emission_Keyboard.geometry}
    material={nodes.Emission_Keyboard.material}
    position={[-1.267, 0.607, -0.352]}
    rotation={[0, -Math.PI / 6, Math.PI / 2]}
/>
<mesh
    castShadow
    receiveShadow
    geometry={nodes.Emission_Fridge.geometry}
    material={nodes.Emission_Fridge.material}
    position={[-1.354, 0.708, 0.388]}
/>
<mesh
    castShadow
    receiveShadow
    geometry={nodes.Emission_WallEdge_1.geometry}
    material={nodes.Emission_WallEdge_1.material}
    position={[0.032, 1.069, -1.498]}
    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
/>
<mesh
    castShadow
    receiveShadow
    geometry={nodes.Emission_WallEdge_2.geometry}
    material={nodes.Emission_WallEdge_2.material}
    position={[-1.748, 1.069, -0.032]}
    rotation={[0, 0, Math.PI / 2]}
/>

*/
