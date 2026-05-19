import { Html } from "@react-three/drei";

const IFrameScreen = () => {
    return (
        <Html
            wrapperClass="html-screen"
            transform
            // occlude="blending"
            distanceFactor={1.17}
            position={[0.55, 1.051, -1.394]}
            zIndexRange={[1, 0]}
        >
            <iframe src="https://iframetester.com/#:~:text=iframetester.com%20is%20the%20easiest%20way%20to%20test%20if,particular%20webpage%20can%20be%20embedded%20in%20an%20iframe." />
        </Html>
    );
};

export default IFrameScreen;

/*
======= To - Do =======
- make iframe unhoverable when unfocusing

*/

/* 

<mesh
    castShadow
    receiveShadow
    geometry={nodes.MovieScreen.geometry}
    material={nodes.MovieScreen.material}
    position={[0.549, 1.057, -1.394]}
/> 

*/
