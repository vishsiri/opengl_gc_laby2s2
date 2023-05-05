#version 330

in vec4 vCol;
in vec2 TexCoord;
in vec3 Normal;
in vec3 FragPos;

out vec4 colour;

uniform vec3 lightPos;
uniform vec3 lightColour;

uniform sampler2D texture2D;

vec3 ambientLight() {
    float ambientStrenght = 0.3f;
    vec3 ambient = lightColour * ambientStrenght;
    return ambient;
}

vec3 diffuseLight() {
    float diffuseStrength = 0.8f;

    vec3 norm = normalize(Normal);
    vec3 lightDir = normalize(lightPos - FragPos);

    float diff = max(dot(norm, lightDir), 0);
    vec3 diffuse = lightColour * diff * diffuseStrength;
    return diffuse;
}

void main() {
    colour = texture(texture2D, TexCoord) * vec4(ambientLight() + diffuseLight(), 1.0f);
}