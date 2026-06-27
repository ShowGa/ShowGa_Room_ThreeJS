import * as THREE from "three";

export const objectFocusData = {
    pc_monitor: {
        id: "pc_monitor",
        cameraPos: new THREE.Vector3(-0.76, 0.04, -0.53),
        cameraTargetPos: new THREE.Vector3(-0.99, 0, -0.57),
    },

    movie_screen: {
        id: "movie_screen",
        cameraPos: new THREE.Vector3(0.61, 0.06, 0.13),
        cameraTargetPos: new THREE.Vector3(0.61, 0.06, -0.95),
    },

    // 牆上海報(left/mid/right)共用一個視角,鏡頭從房間內側看向海報牆
    poster: {
        id: "poster",
        cameraPos: new THREE.Vector3(-1.2, 1.0, -0.55),
        cameraTargetPos: new THREE.Vector3(-1.2, 1.1, -1.4),
    },

    reset: {
        id: "reset",
        cameraPos: new THREE.Vector3(2.94, 1.5, 3.0),
        cameraTargetPos: new THREE.Vector3(0, 0, 0),
    },
};

/*

pc monitor
- cameraPos : {x: -0.76, y: 0.04, z: -0.53}
- cameraTargetPos : {x: -0.99, y: 0, z: -0.57}

movie screen
- cameraPos : {x: 0.61, y: 0.06, z: 0.13}
- cameraTargetPos : {x: 0.61, y: 0.06, z: -2.5}

reset
- cameraPos : {x: 2.94, y: 1.5, z: 3.0}
- cameraTargetPos : (0, 0, 0)

*/
