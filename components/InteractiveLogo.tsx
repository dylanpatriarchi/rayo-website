"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

// Custom Shader Material using simple Three.js ShaderMaterial
const LogoShaderMaterial = {
    uniforms: {
        uTexture: { value: null },
        uHover: { value: 0 },
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) }
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform sampler2D uTexture;
    uniform float uHover;
    uniform float uTime;
    varying vec2 vUv;

    // Simplex noise function
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = vUv;
      
      // Liquid distortion effect - SUPER SLOW
      float noise = snoise(uv * 3.0 + uTime * 0.05);
      float distortion = noise * 0.05 * uHover;
      
      // Standard texture handling (No RGB Shift/Chromatic Aberration)
      vec4 originalColor = texture2D(uTexture, uv + distortion);
      
      // Enhance alpha for cleaner edges during distortion
      if (originalColor.a < 0.1) discard;

      gl_FragColor = originalColor;
    }
  `
};

function LogoPlane() {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useLoader(THREE.TextureLoader, "/logo.svg");
    const [hovered, setHover] = useState(false);
    const [aspect, setAspect] = useState(1);

    // Update aspect ratio when texture loads
    useMemo(() => {
        if (texture.image) {
            setAspect(texture.image.width / texture.image.height);
        }
    }, [texture]);

    // Shader material instance
    const shaderArgs = useMemo(
        () => ({
            uniforms: {
                uTexture: { value: texture },
                uHover: { value: 0 },
                uTime: { value: 0 },
                uResolution: { value: new THREE.Vector2(1, 1) }
            },
            vertexShader: LogoShaderMaterial.vertexShader,
            fragmentShader: LogoShaderMaterial.fragmentShader,
            transparent: true,
        }),
        [texture]
    );

    useFrame((state, delta) => {
        if (meshRef.current) {
            const material = meshRef.current.material as THREE.ShaderMaterial;

            // Smoothly interpolate hover state
            material.uniforms.uHover.value = THREE.MathUtils.lerp(
                material.uniforms.uHover.value,
                hovered ? 1 : 0,
                delta * 3 // Speed of transition
            );

            // Animation time - SLOWED DOWN
            material.uniforms.uTime.value += delta * 0.2;

            // Gentle floating scale pulse when hovered
            const targetScale = hovered ? 1.05 : 1.0;
            // Scale x by targetScale, y by targetScale. The aspect ratio is handled by geometry args.
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, 1), delta * 2);
        }
    });

    return (
        <mesh
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            {/* 
                We use a fixed height of 3 units, and calculate width based on aspect.
                This ensures the logo is ~3 units tall in the 3D world.
             */}
            <planeGeometry args={[3 * aspect, 3]} />
            <shaderMaterial args={[shaderArgs]} />
        </mesh>
    );
}

interface InteractiveLogoProps {
    className?: string;
}

export default function InteractiveLogo({ className = "" }: InteractiveLogoProps) {
    return (
        <div className={`relative w-full h-full ${className}`}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                style={{ background: 'transparent' }}
                dpr={[1, 2]} // Handle retina screens
                gl={{ alpha: true, antialias: true }}
            >
                <LogoPlane />
            </Canvas>
        </div>
    );
}
