import * as THREE from "three";
import { useTexture } from "@react-three/drei";

const useLightMaskTexture = (urls, isFlipY) => {
    const textures = useTexture(urls); // return single texture or texture[] depends on arg

    const textureList = Array.isArray(textures) ? textures : [textures];

    textureList.forEach((texture) => {
        texture.flipY = isFlipY;
        texture.colorSpace = THREE.NoColorSpace;
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
    });

    return textures;
};

export default useLightMaskTexture;
