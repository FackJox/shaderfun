uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
uniform vec3 lightPos;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal; 
varying vec3 FragPos;

float PI = 3.14159;
void main() {

    vec3 norm = normalize(vNormal);
    vec3 lightDir = normalize(lightPos - FragPos);
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = abs(sin(diff)) * vec3(1.0);

    gl_FragColor = vec4(vUv,0.0,1.0);
    gl_FragColor = vec4(vNormal,1.0);
    gl_FragColor = vec4(diffuse, 0.3);
}