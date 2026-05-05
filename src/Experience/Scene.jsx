import { Center } from "@react-three/drei";
import { Room } from "./models/Room";

const Scene = () => {
    return (
        <Center>
            <group>
                <Room />
            </group>
        </Center>
    );
};

export default Scene;
