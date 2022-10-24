precision mediump float;

uniform sampler2D uTexture;
uniform float uBrightness; 
varying vec2 vUv;
varying vec3 vNormal;

void main() {


     vec3 texture = texture2D(uTexture, vUv).xyz;

      gl_FragColor = vec4(texture * uBrightness, 1.0);
    }