uniform float uTime;

varying vec2 vUv;

void main() {
    float waveSpeedOffset = uTime * 1.0; // control color change speed
    float rainbowWaveDistanceX = vUv.x * 2.0; // constant higher = distance shorter
    float rainbowWaveDistanceY = vUv.y * 2.0;
    float rainbowWaveDistanceXY = (vUv.x + vUv.y) * 1.0;

    vec3 color = vec3(
            sin(waveSpeedOffset + 1.0 + rainbowWaveDistanceX), // r channel
            sin(waveSpeedOffset + 3.0 + rainbowWaveDistanceY), // g channel
            sin(waveSpeedOffset + 5.0 + rainbowWaveDistanceXY) // b channel
        );

    gl_FragColor = vec4(color, 1.0);
}