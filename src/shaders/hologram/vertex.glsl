uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;

// test
varying vec3 vWorldPosition;

#include ./includes/random2D.glsl

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // ================= //
    // Glitch
    // ================= //
    // modelPosition += random2D(step(0.8, mod(uv.y + uTime, 3.0)) * (modelPosition.xz + uTime));
    // <<<<<< Note >>>>>> //
    // - 0.5 for making the object back to the initial position (random2D move the position with value 0.0 to 1.0)
    float glitchTime = uTime - modelPosition.y;
    float glitchStrength = sin(glitchTime); // controlling the value strength value : "*" value for different frequency
    glitchStrength /= 3.0; // divide the + times for sin(glitchTime) : connect to above
    glitchStrength = smoothstep(0.1, 1.0, glitchStrength); // controlling the range of the glitchStrength : not showing effect of the pixel which strength lower than 0.1
    glitchStrength *= 0.1; // controlling the strength

    modelPosition.x += (random2D(modelPosition.xz + uTime) - 0.5) * glitchStrength;
    modelPosition.z += (random2D(modelPosition.zx + uTime) - 0.5) * glitchStrength;

    // ================= //
    // Final matrix
    // ================= //
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    
    // ================= //
    // Model normal
    // ================= //
    // <<<<<< Note >>>>>> //
    // vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
    vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

    // ================= //
    // varying
    // ================= //
    vPosition = position.xyz;
    vNormal = modelNormal.xyz;

    vWorldPosition = modelPosition.xyz;
}

/*

======== Delete Code ========

<<< glitchStrength >>>
 + sin(glitchTime * 3.45) + sin(glitchTime * 8.76)

*/