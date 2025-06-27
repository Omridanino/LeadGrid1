
import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
precision mediump float;
varying vec2 vUv;
uniform float time;
uniform vec2 resolution;

float sdSphere(vec3 p, float r) {
    return length(p) - r;
}

float smin(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
}

float map(vec3 p) {
    vec3 q1 = p - vec3(sin(time * 0.5) * 0.3, cos(time * 0.7) * 0.2, 0.0);
    vec3 q2 = p - vec3(cos(time * 0.4) * 0.4, sin(time * 0.6) * 0.3, 0.0);
    vec3 q3 = p - vec3(sin(time * 0.3) * 0.2, cos(time * 0.5) * 0.4, 0.0);
    
    float d1 = sdSphere(q1, 0.4);
    float d2 = sdSphere(q2, 0.3);
    float d3 = sdSphere(q3, 0.25);
    
    float d = smin(d1, d2, 0.3);
    d = smin(d, d3, 0.2);
    
    return d;
}

vec3 calcNormal(vec3 p) {
    const float h = 0.001;
    return normalize(vec3(
        map(p + vec3(h, 0, 0)) - map(p - vec3(h, 0, 0)),
        map(p + vec3(0, h, 0)) - map(p - vec3(0, h, 0)),
        map(p + vec3(0, 0, h)) - map(p - vec3(0, 0, h))
    ));
}

void main() {
    vec2 uv = (vUv - 0.5) * 2.0;
    uv.x *= resolution.x / resolution.y;
    
    vec3 ro = vec3(0, 0, 2);
    vec3 rd = normalize(vec3(uv, -1));
    
    float t = 0.0;
    for(int i = 0; i < 32; i++) {
        vec3 p = ro + rd * t;
        float d = map(p);
        if(d < 0.01) break;
        t += d * 0.8;
        if(t > 5.0) break;
    }
    
    vec3 color = vec3(0.05, 0.05, 0.1);
    
    if(t < 5.0) {
        vec3 p = ro + rd * t;
        vec3 n = calcNormal(p);
        
        float fresnel = pow(1.0 - dot(-rd, n), 2.0);
        vec3 baseColor = mix(vec3(0.2, 0.4, 1.0), vec3(1.0, 0.3, 0.8), fresnel);
        
        color = baseColor * (0.5 + 0.5 * dot(n, normalize(vec3(1, 1, 1))));
        color += fresnel * 0.8;
    }
    
    gl_FragColor = vec4(color, 1.0);
}
`;

function FluidBlobMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size, viewport } = useThree();

  const uniforms = useMemo(() => ({
    time: { value: 0 },
    resolution: { value: new THREE.Vector2(size.width, size.height) }
  }), []);

  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
  }), [uniforms]);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.resolution.value.set(size.width, size.height);
    }
  }, [size]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <primitive object={material} ref={materialRef} />
    </mesh>
  );
}

export const FluidBlob = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={Math.min(window.devicePixelRatio, 2)}
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: "low-power"
        }}
      >
        <FluidBlobMesh />
      </Canvas>
    </div>
  );
};
