varying vec2 vUv;

// Baked textures
uniform sampler2D uBakedTextureLightOn;
uniform sampler2D uBakedTextureLightOff;
uniform sampler2D uBakedTextureLightMask;
uniform sampler2D uBakedTextureRGB1;
uniform sampler2D uBakedTextureRGB2;
uniform sampler2D uBakedTextureRGB3;
uniform sampler2D uBakedTextureRGB4;
uniform sampler2D uBakedTextureRGB5;

// Light intensities
uniform float uLight1Intensity;
uniform float uLight2Intensity;
// uniform float uSpotLightIntensity;

// RGB Desk
uniform float uRGBPcDeskIntensity;
uniform vec3 uRGBPcDeskColor;

// RGB Movie Screen
uniform float uRGBMovieScreenAndTvDeskIntensity;
uniform vec3 uRGBMovieScreenAndTvDeskColor;

// RGB Hologram
uniform float uRGBHologramIntensity;
uniform vec3 uRGBHologramColor;

// Emission Wall Edge
uniform float uEmissionWallEdgeIntensity;
uniform vec3 uEmissionWallEdgeColor;

// Emission Fridge
uniform float uEmissionFridgeIntensity;
uniform vec3 uEmissionFridgeColor;

void main() {
    // baked texture color
    vec3 bakedLightOnColor = texture2D(uBakedTextureLightOn, vUv).rgb;
    vec3 bakedLightOffColor = texture2D(uBakedTextureLightOff, vUv).rgb;
    vec3 bakedLightMaskColor = texture2D(uBakedTextureLightMask, vUv).rgb;
    vec3 bakedRGB1MaskColor = texture2D(uBakedTextureRGB1, vUv).rgb;
    vec3 bakedRGB2MaskColor = texture2D(uBakedTextureRGB2, vUv).rgb;
    vec3 bakedRGB3MaskColor = texture2D(uBakedTextureRGB3, vUv).rgb;
    vec3 bakedRGB4MaskColor = texture2D(uBakedTextureRGB4, vUv).rgb;
    vec3 bakedRGB5MaskColor = texture2D(uBakedTextureRGB5, vUv).rgb;

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

    // =========== Calculating RGB Light =========== //

    float rgbPcDeskStrength = bakedRGB1MaskColor.r * uRGBPcDeskIntensity;
    color += uRGBPcDeskColor * rgbPcDeskStrength;
    
    float rgbMovieScreenAndTvDeskStrength = bakedRGB2MaskColor.r * uRGBMovieScreenAndTvDeskIntensity;
    color += uRGBMovieScreenAndTvDeskColor * rgbMovieScreenAndTvDeskStrength;

    float emissionWalledgeStrength = bakedRGB3MaskColor.r * uEmissionWallEdgeIntensity;
    color += uEmissionWallEdgeColor * emissionWalledgeStrength;

    float emissionFridgeStrength = bakedRGB4MaskColor.r * uEmissionFridgeIntensity;
    color += uEmissionFridgeColor * emissionFridgeStrength;

    float rgbHologramStrength = bakedRGB5MaskColor.r * uRGBHologramIntensity;
    color += uRGBHologramColor * rgbHologramStrength;

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