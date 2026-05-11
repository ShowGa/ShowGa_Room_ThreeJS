varying vec2 vUv;

// Baked textures
uniform sampler2D uBakedTextureLightOn;
uniform sampler2D uBakedTextureLightOff;
uniform sampler2D uBakedTextureLightMask;
uniform sampler2D uBakedTextureRGB1;
uniform sampler2D uBakedTextureRGB2;
uniform sampler2D uBakedTextureRGB3;

// Light intensities
uniform float uLight1Intensity;
uniform float uLight2Intensity;
// uniform float uSpotLightIntensity;

// RGB Desk
uniform float uRGBDeskIntensity;
uniform vec3 uRGBDeskColor;

// RGB Monitor Back
uniform float uRGBMonitorBackIntensity;
uniform vec3 uRGBMonitorBackColor;

// RGB Movie Screen
uniform float uRGBMovieScreenIntensity;
uniform vec3 uRGBMovieScreenColor;

// RGB TV Desk
uniform float uRGBTVDeskIntensity;
uniform vec3 uRGBTVDeskColor;

// RGB Hologram
uniform float uRGBHologramIntensity;
uniform vec3 uRGBHologramColor;

// Emission Wall Edge 1
uniform float uEmissionWallEdge1Intensity;
uniform vec3 uEmissionWallEdge1Color;

// Emission Wall Edge 2
uniform float uEmissionWallEdge2Intensity;
uniform vec3 uEmissionWallEdge2Color;

// Emission Fridge
uniform float uEmissionFridgeIntensity;
uniform vec3 uEmissionFridgeColor;

void main() {
    // baked texture color
    vec3 bakedLightOnColor = texture2D(uBakedTextureLightOn, vUv).rgb;
    vec3 bakedLightOffColor = texture2D(uBakedTextureLightOff, vUv).rgb;
    vec3 bakedLightMaskColor = texture2D(uBakedTextureLightMask, vUv).rgb;

    // =========== Calculating Light =========== //

    // light mask normalize weight
    float totalWeight = max(
        bakedLightMaskColor.r + bakedLightMaskColor.g,
        0.0001 // avoid division by zero
    );

    float mixValue = (
        bakedLightMaskColor.r * uLight1Intensity + 
        bakedLightMaskColor.g * uLight2Intensity
    ) / totalWeight;
    
    vec3 color = mix(bakedLightOffColor, bakedLightOnColor, mixValue);

    gl_FragColor = vec4(color, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}

/*
======== Delete Code =========

// float mixValue = clamp(
//     bakedLightMaskColor.r * uLight1Intensity + 
//     bakedLightMaskColor.g * uLight2Intensity + 
//     bakedLightMaskColor.b * uSpotLightIntensity,
//     0.0,
//     1.0
// );


// color = pow(color, vec3(1.0/2.2));
*/