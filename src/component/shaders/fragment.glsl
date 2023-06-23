uniform sampler2D uTexture;
uniform float uScaleFactorX;
uniform float uScaleFactorY;

varying vec2 vUv;

void main() {
    vec2 st = (vUv * 2.0 - 1.0);
    st.x *= uScaleFactorX;
    st.y *= uScaleFactorY;

    st = st * 0.5 + 0.5;

    // vec4 outputTexture = texture(uTexture, st);
    // gl_FragColor = outputTexture;
    vec4 color = texture(uTexture, st);
    float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    gl_FragColor = vec4(vec3(gray), color.a);
}