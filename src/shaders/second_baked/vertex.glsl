varying vec2 vUv;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = modelPosition * viewMatrix;
    vec4 projectionPosition = viewPosition * projectionMatrix;

    gl_Position = projectionPosition;

    vUv = uv;
}