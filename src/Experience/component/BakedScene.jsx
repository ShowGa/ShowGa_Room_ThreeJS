import useSRGBTexture from "../../hooks/useSRGBTexture";

import firstVertexShader from "../../shaders/first_baked/vertex.glsl";
import firstFragmentShader from "../../shaders/first_baked/fragment.glsl";
import secondVertexShader from "../../shaders/second_baked/vertex.glsl";
import secondFragmentShader from "../../shaders/second_baked/fragment.glsl";

const BakedScene = ({ nodes, textureUrls }) => {
    const bakedTextures = useSRGBTexture(textureUrls, false);

    const textureCollections = [
        {
            key: "first_collection",
            node: nodes.Floor_Wood,
            position: [-0.032, 0.068, -0.032],
            vertexShader: firstVertexShader,
            fragmentShader: firstFragmentShader,
        },
        {
            key: "second_collection",
            node: nodes.Cube017,
            position: [-1.535, 0.673, -0.402],
            vertexShader: secondVertexShader,
            fragmentShader: secondFragmentShader,
        },
    ];

    const createUniforms = (offset) => ({
        uBakedTextureLightOn: {
            value: bakedTextures[offset + 0],
        },

        uBakedTextureLightOff: {
            value: bakedTextures[offset + 1],
        },

        uBakedTextureLightMask: {
            value: bakedTextures[offset + 2],
        },

        uBakedTextureRGB1: {
            value: bakedTextures[offset + 3],
        },

        uBakedTextureRGB2: {
            value: bakedTextures[offset + 4],
        },

        uBakedTextureRGB3: {
            value: bakedTextures[offset + 5],
        },
    });

    return textureCollections.map((textureCollection, i) => (
        <mesh
            castShadow
            receiveShadow
            geometry={textureCollection.node.geometry}
            position={textureCollection.position}
        >
            <meshBasicMaterial map={bakedTextures[i]} />
            {/* <shaderMaterial uniforms={createUniforms(i)} /> */}
        </mesh>
    ));
};

export default BakedScene;
