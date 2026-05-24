uniform float uTime;
// uniform vec3 uColor;

varying vec3 vPosition;
varying vec3 vNormal;

// test
varying vec3 vWorldPosition;

void main() {
    // ================= //
    // Normal
    // ================= //
    vec3 normal = normalize(vNormal);

    if (!gl_FrontFacing) normal *= -1.0;
    

    // ================= //
    // stripe
    // ================= //
    // <<<<<< Note >>>>>> //
    // * -0.02 make it looks upward
    // pow : push white to the edge
    float stripes = mod((vPosition.y + uTime * - 0.02) * 20.0, 0.8); // test
    stripes = pow(stripes, 2.0);

    // ================= //
    // Fresnel
    // ================= //
    // <<<<<< Note >>>>>> //
    // * -0.02 make it looks upward
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);// subtract cameraPosition to vPosition and save the result as viewDirection // test
    float fresnel = 1.0 - dot(normalize(normal), viewDirection);

    // ================= //
    // Power
    // ================= //
    // <<<<<< Note >>>>>> //
    // pow : push white to the edge
    fresnel = pow(fresnel, 3.0);

    // ================= //
    // Falloff : fade out
    // ================= //
    float falloff = smoothstep(0.8, 0.0, fresnel);

    // ================= //
    // Combine the fresnel and stripes => Holographic
    // ================= //
    float holographic = stripes * fresnel;

    // ================= //
    // Make it brighter
    // ================= //
    holographic += fresnel * 1.25;
    holographic *= falloff;

    gl_FragColor = vec4(vPosition, holographic);

    // ================= //
    // Threejs include chunks
    // ================= //
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}