import * as THREE from "three";

import { useMemo, useRef, useEffect } from "react";
import useSRGBTexture from "../../hooks/useSRGBTexture";
import { useRGBColorStore } from "../../stores/useRGBColorStore";

const BakedMesh = ({ collection, levaControls }) => {
    const materialRef = useRef();

    const bakedTextures = useSRGBTexture(collection.bakedTextureUrls, false);
    const lightMaskTextures = useSRGBTexture(
        collection.lightMaskTextureUrls,
        false,
    );

    const hologramRGB = useRGBColorStore((state) => state.hologramRGB);
    const fridgeRGB = useRGBColorStore((state) => state.fridgeRGB);
    const wallEdgeRGB = useRGBColorStore((state) => state.wallEdgeRGB);

    const uniforms = useMemo(
        () => ({
            // baked textures
            uBakedTextureLightOn: {
                value: bakedTextures[0],
            },

            uBakedTextureLightOff: {
                value: bakedTextures[1],
            },

            uBakedTextureLightMask: {
                value: lightMaskTextures[0],
            },

            uBakedTextureRGB1: {
                value: lightMaskTextures[1],
            },

            uBakedTextureRGB2: {
                value: lightMaskTextures[2],
            },

            uBakedTextureRGB3: {
                value: lightMaskTextures[3],
            },

            uBakedTextureRGB4: {
                value: lightMaskTextures[4],
            },

            uBakedTextureRGB5: {
                value: lightMaskTextures[5],
            },

            // light intensity
            uLight1Intensity: {
                value: 1,
            },

            uLight2Intensity: {
                value: 1,
            },

            // RGB Desk and monitor
            uRGBPcDeskIntensity: {
                value: 1,
            },

            uRGBPcDeskColor: {
                value: new THREE.Color("#ffffff"),
            },

            // RGB Movie Screen
            uRGBMovieScreenAndTvDeskIntensity: {
                value: 1,
            },

            uRGBMovieScreenAndTvDeskColor: {
                value: new THREE.Color("#ffffff"),
            },

            // RGB Hologram
            uRGBHologramIntensity: {
                value: 1,
            },

            uRGBHologramColor: {
                value: new THREE.Color("#ffffff"),
            },

            // Emission Wall Edge
            uEmissionWallEdgeIntensity: {
                value: 1,
            },

            uEmissionWallEdgeColor: {
                value: new THREE.Color("#ffffff"),
            },

            // Emission Fridge
            uEmissionFridgeIntensity: {
                value: 1,
            },

            uEmissionFridgeColor: {
                value: new THREE.Color("#ffffff"),
            },
        }),
        [bakedTextures],
    );

    const updateLightUniform = () => {
        const shaderUniforms = materialRef.current.uniforms;

        shaderUniforms.uLight1Intensity.value = levaControls.Light_1_Intensity;

        shaderUniforms.uLight2Intensity.value = levaControls.Light_2_Intensity;

        // shaderUniforms.uSpotLightIntensity.value =
        //     levaControls.Spot_Light_Intensity;
    };

    const updateRGBUniform = () => {
        const shaderUniforms = materialRef.current.uniforms;

        shaderUniforms.uRGBPcDeskIntensity.value =
            levaControls.RGB_Pc_Desk_Intensity;
        shaderUniforms.uRGBPcDeskColor.value.set(
            levaControls.RGB_Pc_Desk_Color,
        );

        shaderUniforms.uRGBMovieScreenAndTvDeskIntensity.value =
            levaControls.RGB_MovieScreen_And_TVDesk_Intensity;
        shaderUniforms.uRGBMovieScreenAndTvDeskColor.value.set(
            levaControls.RGB_MovieScreen_And_TVDesk_Color,
        );

        shaderUniforms.uRGBHologramIntensity.value =
            levaControls.RGB_Hologram_Intensity;
        shaderUniforms.uRGBHologramColor.value.set(hologramRGB);
    };

    const updateEmissionUniform = () => {
        const shaderUniforms = materialRef.current.uniforms;

        shaderUniforms.uEmissionWallEdgeIntensity.value =
            levaControls.Emission_WallEdge_Intensity;
        shaderUniforms.uEmissionWallEdgeColor.value.set(wallEdgeRGB);

        shaderUniforms.uEmissionFridgeIntensity.value =
            levaControls.Emission_Fridge_Intensity;
        shaderUniforms.uEmissionFridgeColor.value.set(fridgeRGB);
    };

    // Leva -> uniforms (update material uniforms)
    useEffect(() => {
        if (!materialRef.current) return;

        updateLightUniform();
    }, [
        levaControls.Light_1_Intensity,
        levaControls.Light_2_Intensity,
        // levaControls.Spot_Light_Intensity,
    ]);

    useEffect(() => {
        if (!materialRef.current) return;
        updateRGBUniform();
    }, [
        levaControls.RGB_Pc_Desk_Intensity,
        levaControls.RGB_Pc_Desk_Color,

        levaControls.RGB_MovieScreen_And_TVDesk_Intensity,
        levaControls.RGB_MovieScreen_And_TVDesk_Color,

        levaControls.RGB_Hologram_Intensity,
        hologramRGB,
    ]);

    useEffect(() => {
        if (!materialRef.current) return;
        updateEmissionUniform();
    }, [
        levaControls.Emission_WallEdge_Intensity,
        wallEdgeRGB,

        // levaControls.Emission_WallEdge_2_Intensity,
        // levaControls.Emission_WallEdge_2_Color,

        levaControls.Emission_Fridge_Intensity,
        fridgeRGB,
    ]);

    return (
        <mesh
            castShadow
            receiveShadow
            geometry={collection.node.geometry}
            position={collection.position}
        >
            <shaderMaterial
                ref={materialRef}
                vertexShader={collection.vertexShader}
                fragmentShader={collection.fragmentShader}
                uniforms={uniforms}
            />

            {/* <meshBasicMaterial map={bakedTextures[0]} /> */}
        </mesh>
    );
};

export default BakedMesh;
