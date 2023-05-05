#version 330

in vec4 vCol;
out vec4 colour;
in vec2 TexCoord;
in vec3 Normal;

in vec3 FragPos;

uniform vec3 lightPos;
uniform sampler2D texture2D;
uniform vec3 lightColour;

vec3 ambientLight() {
    float ambientStrenght = 0.2f;
    vec3 ambient = ambientStrenght * lightColour;
    return ambient;
}

vec3 diffuseLight() {
    float diffuseStrenght = 0.5f;
    vec3 norm = normalize(Normal);
    vec3 lightDir = normalize(lightPos - FragPos);

    float diff = max(dot(norm, lightDir), 0);
    vec3 diffuse = diffuseStrenght * lightColour * diff;
    return diffuse;
}

void main() {
    colour = texture(texture2D, TexCoord) * vec4(ambientLight() + diffuseLight(), 1.0f);
}