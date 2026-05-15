import * as THREE from "three";

import { useMemo, useRef, useEffect } from "react";
import useSRGBTexture from "../../hooks/useSRGBTexture";

const BakedMesh = ({ collection, levaControls }) => {
    const materialRef = useRef();

    const bakedTextures = useSRGBTexture(collection.bakedTextureUrls, false);

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
                value: bakedTextures[2],
            },

            uBakedTextureRGB1: {
                value: bakedTextures[3],
            },

            uBakedTextureRGB2: {
                value: bakedTextures[4],
            },

            uBakedTextureRGB3: {
                value: bakedTextures[5],
            },

            // light intensity
            uLight1Intensity: {
                value: 1,
            },

            uLight2Intensity: {
                value: 1,
            },

            // uSpotLightIntensity: {
            //     value: 1,
            // },

            // RGB Desk
            uRGBDeskIntensity: {
                value: 1,
            },

            uRGBDeskColor: {
                value: new THREE.Color("#00ffff"),
            },

            // RGB Monitor Back
            uRGBMonitorBackIntensity: {
                value: 1,
            },

            uRGBMonitorBackColor: {
                value: new THREE.Color("#00ffff"),
            },

            // RGB Movie Screen
            uRGBMovieScreenIntensity: {
                value: 1,
            },

            uRGBMovieScreenColor: {
                value: new THREE.Color("#00ffff"),
            },

            // RGB TV Desk
            uRGBTVDeskIntensity: {
                value: 1,
            },

            uRGBTVDeskColor: {
                value: new THREE.Color("#00ffff"),
            },

            // RGB Hologram
            uRGBHologramIntensity: {
                value: 1,
            },

            uRGBHologramColor: {
                value: new THREE.Color("#00ffff"),
            },

            // Emission Wall Edge 1
            uEmissionWallEdgeIntensity: {
                value: 1,
            },

            uEmissionWallEdgeColor: {
                value: new THREE.Color("#00ffff"),
            },

            // Emission Wall Edge 2
            // uEmissionWallEdge2Intensity: {
            //     value: 1,
            // },

            // uEmissionWallEdge2Color: {
            //     value: new THREE.Color("#00ffff"),
            // },

            // Emission Fridge
            uEmissionFridgeIntensity: {
                value: 1,
            },

            uEmissionFridgeColor: {
                value: new THREE.Color("#00ffff"),
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

        shaderUniforms.uRGBDeskIntensity.value =
            levaControls.RGB_Desk_Intensity;
        shaderUniforms.uRGBDeskColor.value.set(levaControls.RGB_Desk_Color);

        shaderUniforms.uRGBMonitorBackIntensity.value =
            levaControls.RGB_MonitorBack_Intensity;
        shaderUniforms.uRGBMonitorBackColor.value.set(
            levaControls.RGB_MonitorBack_Color,
        );

        shaderUniforms.uRGBMovieScreenIntensity.value =
            levaControls.RGB_MovieScreen_Intensity;
        shaderUniforms.uRGBMovieScreenColor.value.set(
            levaControls.RGB_MovieScreen_Color,
        );

        shaderUniforms.uRGBTVDeskIntensity.value =
            levaControls.RGB_TVDesk_Intensity;
        shaderUniforms.uRGBTVDeskColor.value.set(levaControls.RGB_TVDesk_Color);

        shaderUniforms.uRGBHologramIntensity.value =
            levaControls.RGB_Hologram_Intensity;
        shaderUniforms.uRGBHologramColor.value.set(
            levaControls.RGB_Hologram_Color,
        );
    };

    const updateEmissionUniform = () => {
        const shaderUniforms = materialRef.current.uniforms;

        shaderUniforms.uEmissionWallEdgeIntensity.value =
            levaControls.Emission_WallEdge_Intensity;
        shaderUniforms.uEmissionWallEdgeColor.value.set(
            levaControls.Emission_WallEdge_Color,
        );

        // shaderUniforms.uEmissionWallEdge2Intensity.value =
        //     levaControls.Emission_WallEdge_2_Intensity;
        // shaderUniforms.uEmissionWallEdge2Color.value.set(
        //     levaControls.Emission_WallEdge_2_Color,
        // );

        shaderUniforms.uEmissionFridgeIntensity.value =
            levaControls.Emission_Fridge_Intensity;
        shaderUniforms.uEmissionFridgeColor.value.set(
            levaControls.Emission_Fridge_Color,
        );
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
        levaControls.RGB_Desk_Intensity,
        levaControls.RGB_Desk_Color,

        levaControls.RGB_MonitorBack_Intensity,
        levaControls.RGB_MonitorBack_Color,

        levaControls.RGB_MovieScreen_Intensity,
        levaControls.RGB_MovieScreen_Color,

        levaControls.RGB_TVDesk_Intensity,
        levaControls.RGB_TVDesk_Color,

        levaControls.RGB_Hologram_Intensity,
        levaControls.RGB_Hologram_Color,
    ]);

    useEffect(() => {
        if (!materialRef.current) return;
        updateEmissionUniform();
    }, [
        levaControls.Emission_WallEdge_Intensity,
        levaControls.Emission_WallEdge_Color,

        // levaControls.Emission_WallEdge_2_Intensity,
        // levaControls.Emission_WallEdge_2_Color,

        levaControls.Emission_Fridge_Intensity,
        levaControls.Emission_Fridge_Color,
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
