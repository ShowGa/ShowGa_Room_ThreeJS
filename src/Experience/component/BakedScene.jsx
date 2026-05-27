import { folder, useControls } from "leva";

import firstVertexShader from "../../shaders/first_baked/vertex.glsl";
import firstFragmentShader from "../../shaders/first_baked/fragment.glsl";
import secondVertexShader from "../../shaders/second_baked/vertex.glsl";
import secondFragmentShader from "../../shaders/second_baked/fragment.glsl";
import BakedMesh from "./BakedMesh";
import { useRGBColorStore } from "../../stores/useRGBColorStore";

const firstBakedTextureUrls = [
    "/texture/first_texture_lightOn.webp",
    "/texture/first_texture_lightOff.webp",
    "/texture/first_texture_light_mask.webp",
    "/texture/first_texture_RGB_1.webp",
    "/texture/first_texture_RGB_2.webp",
    "/texture/first_texture_RGB_3.webp",
];
const secondBakedTextureUrls = [
    "/texture/second_texture_lightOn.webp",
    "/texture/second_texture_lightOff.webp",
    "/texture/second_texture_light_mask.webp",
    "/texture/second_texture_RGB_1.webp",
    "/texture/second_texture_RGB_2.webp",
    "/texture/second_texture_RGB_3.webp",
];

const BakedScene = ({ nodes }) => {
    const setHologramRGB = useRGBColorStore((state) => state.setHologramRGB);
    const setFridgeRGB = useRGBColorStore((state) => state.setFridgeRGB);
    const setWallEdgeRGB = useRGBColorStore((state) => state.setWallEdgeRGB);

    // leva panel : controlling room variable (for all of the materials uniform)
    const levaControls = useControls("Control Panel", {
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
                RGB_Desk_Intensity: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: 0.01,
                },
                RGB_Desk_Color: "#00ffff",

                RGB_MonitorBack_Intensity: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: 0.01,
                },
                RGB_MonitorBack_Color: "#00ffff",

                RGB_MovieScreen_Intensity: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: 0.01,
                },
                RGB_MovieScreen_Color: "#00ffff",

                RGB_TVDesk_Intensity: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: 0.01,
                },
                RGB_TVDesk_Color: "#00ffff",

                RGB_Hologram_Intensity: {
                    value: 0,
                    min: 0,
                    max: 1,
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

                // Emission_WallEdge_2_Intensity: {
                //     value: 1,
                //     min: 0,
                //     max: 1,
                //     step: 0.01,
                // },
                // Emission_WallEdge_2_Color: "#00ffff",

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
    });

    // Organize collection data
    const collections = [
        {
            key: "first_collection",
            node: nodes.Floor_Wood,
            position: [-0.032, 0.068, -0.032],
            vertexShader: firstVertexShader,
            fragmentShader: firstFragmentShader,
            bakedTextureUrls: firstBakedTextureUrls,
        },
        {
            key: "second_collection",
            node: nodes.Cube017,
            position: [-1.535, 0.673, -0.402],
            vertexShader: secondVertexShader,
            fragmentShader: secondFragmentShader,
            bakedTextureUrls: secondBakedTextureUrls,
        },
    ];

    return collections.map((collection, i) => (
        <BakedMesh collection={collection} levaControls={levaControls} />
    ));
};

export default BakedScene;
