import { useEffect } from "react";
import { folder, useControls } from "leva";

import firstVertexShader from "../../shaders/first_baked/vertex.glsl";
import firstFragmentShader from "../../shaders/first_baked/fragment.glsl";
import secondVertexShader from "../../shaders/second_baked/vertex.glsl";
import secondFragmentShader from "../../shaders/second_baked/fragment.glsl";
import BakedMesh from "./BakedMesh";
import { useRGBColorStore } from "../../stores/useRGBColorStore";
import { useRoomStore } from "../../stores/useRoomStore";

// 切回 Light Mode 時恢復成初始預設值
const LIGHT_MODE_PRESET = {
    Light_1_Intensity: 1,
    Light_2_Intensity: 1,
    RGB_Pc_Desk_Intensity: 0,
    RGB_MovieScreen_And_TVDesk_Intensity: 0,
    RGB_Hologram_Intensity: 0,
    Emission_WallEdge_Intensity: 0,
    Emission_Fridge_Intensity: 0,
};

// 切到 Dark Mode 時套用的數值
const DARK_MODE_PRESET = {
    Light_1_Intensity: 0,
    Light_2_Intensity: 0,
    RGB_Pc_Desk_Intensity: 1,
    RGB_MovieScreen_And_TVDesk_Intensity: 1,
    RGB_Hologram_Intensity: 0.4,
    Emission_WallEdge_Intensity: 1,
    Emission_Fridge_Intensity: 1,
};

const firstBakedTextureUrls = [
    "/texture/first_texture_lightOn.webp",
    "/texture/first_texture_lightOff.webp",
];
const firstLightMaskTextureUrls = [
    "/texture/first_texture_light_mask.webp",
    "/texture/first_texture_RGB_1.webp",
    "/texture/first_texture_RGB_2.webp",
    "/texture/first_texture_RGB_3.webp",
    "/texture/first_texture_RGB_4.webp",
    "/texture/first_texture_RGB_5.webp",
];
const secondBakedTextureUrls = [
    "/texture/second_texture_lightOn.webp",
    "/texture/second_texture_lightOff.webp",
    "/texture/second_texture_light_mask.webp",
    "/texture/second_texture_RGB_1.webp",
    "/texture/second_texture_RGB_2.webp",
    "/texture/second_texture_RGB_3.webp",
];
const secondLightMaskTextureUrls = [
    "/texture/second_texture_light_mask.webp",
    "/texture/second_texture_RGB_1.webp",
    "/texture/second_texture_RGB_2.webp",
    "/texture/second_texture_RGB_3.webp",
    "/texture/second_texture_RGB_4_customization.webp",
    "/texture/second_texture_RGB_5.webp",
];

const BakedScene = ({ nodes }) => {
    const setHologramRGB = useRGBColorStore((state) => state.setHologramRGB);
    const setFridgeRGB = useRGBColorStore((state) => state.setFridgeRGB);
    const setWallEdgeRGB = useRGBColorStore((state) => state.setWallEdgeRGB);

    const isDarkMode = useRoomStore((state) => state.isDarkMode);

    // leva panel : controlling room variable (for all of the materials uniform)
    const [levaControls, setLevaControls] = useControls("Control Panel", () => ({
        Light: folder(
            {
                Light_1_Intensity: {
                    value: 1,
                    min: 0,
                    max: 1,
                    step: 0.01,
                },

                Light_2_Intensity: {
                    value: 1,
                    min: 0,
                    max: 1,
                    step: 0.01,
                },

                // Spot_Light_Intensity: {
                //     value: 1,
                //     min: 0,
                //     max: 1,
                //     step: 0.01,
                // },
            },
            { collapsed: true },
        ),
        RGB: folder(
            {
                RGB_Pc_Desk_Intensity: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: 0.01,
                },
                RGB_Pc_Desk_Color: "#ffffff",

                RGB_MovieScreen_And_TVDesk_Intensity: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: 0.01,
                },
                RGB_MovieScreen_And_TVDesk_Color: "#ffffff",

                RGB_Hologram_Intensity: {
                    value: 0,
                    min: 0,
                    max: 0.4,
                    step: 0.01,
                },
                RGB_Hologram_Color: {
                    value: "#ffffff",
                    onChange: (v) => {
                        setHologramRGB(v);
                    },
                },

                Emission_WallEdge_Intensity: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: 0.01,
                },
                Emission_WallEdge_Color: {
                    value: "#ffffff",
                    onChange: (v) => {
                        setWallEdgeRGB(v);
                    },
                },

                Emission_Fridge_Intensity: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: 0.01,
                },
                Emission_Fridge_Color: {
                    value: "#ffffff",
                    onChange: (v) => {
                        setFridgeRGB(v);
                    },
                },
            },
            { collapsed: true },
        ),
    }));

    // Dark Mode 切換:套用對應的 intensity preset(同步更新 Leva 面板與 uniforms)
    useEffect(() => {
        setLevaControls(isDarkMode ? DARK_MODE_PRESET : LIGHT_MODE_PRESET);
    }, [isDarkMode]);

    // Organize collection data
    const collections = [
        {
            key: "first_collection",
            node: nodes.Floor_Wood,
            position: [-0.032, 0.068, -0.032],
            vertexShader: firstVertexShader,
            fragmentShader: firstFragmentShader,
            bakedTextureUrls: firstBakedTextureUrls,
            lightMaskTextureUrls: firstLightMaskTextureUrls,
        },
        {
            key: "second_collection",
            node: nodes.Cube017,
            position: [-1.535, 0.673, -0.402],
            vertexShader: secondVertexShader,
            fragmentShader: secondFragmentShader,
            bakedTextureUrls: secondBakedTextureUrls,
            lightMaskTextureUrls: null,
            lightMaskTextureUrls: secondLightMaskTextureUrls,
        },
    ];

    return collections.map((collection) => (
        <BakedMesh
            key={collection.key}
            collection={collection}
            levaControls={levaControls}
        />
    ));
};

export default BakedScene;
