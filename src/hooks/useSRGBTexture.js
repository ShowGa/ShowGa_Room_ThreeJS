import * as THREE from "three";
import { useTexture } from "@react-three/drei";

const useSRGBTexture = (urls, flipY) => {
    const textures = useTexture(urls); // return single texture or texture[] depends on arg

    const textureList = Array.isArray(textures) ? textures : [textures];

    textureList.forEach((texture) => {
        texture.flipY = flipY;
        texture.colorSpace = THREE.SRGBColorSpace;
    });

    return textures;
};

export default useSRGBTexture;
