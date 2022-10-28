uniform float iGlobalTime;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

varying vec2 vUv;

void main(void)
{
    vec2 p = -1.0 + 2.0 * vUv;
    vec2 q = p - vec2(0.5, 0.5);

    q.x += sin(iGlobalTime* 0.6) * 0.2;
    q.y += sin(iGlobalTime* 0.4) * 0.3;


    vec2 a = vec2(q.x + iGlobalTime * 0.0, q.y - iGlobalTime * 0.8);
    vec2 b = vec2(q.x  * 0.0, q.y - iGlobalTime * 0.7);

    float m = (1.0 + sin(iGlobalTime * 0.5 + 3.5)) / 2.0;
    vec4 tex1 = texture2D(iChannel0, vUv * 8.0 + a);
    vec4 tex2 = texture2D(iChannel1, vUv * 3.0 + b );
    vec3 col = vec3(mix(tex1, tex2, m));
    gl_FragColor = vec4(col  * 1.5, 1.0);
}
