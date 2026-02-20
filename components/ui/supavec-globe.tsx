"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function SupavecGlobe() {
    const sphereRef = useRef<THREE.Mesh>(null);
    const wireframeRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (sphereRef.current) {
            sphereRef.current.rotation.y = time * 0.05;
        }
        if (wireframeRef.current) {
            wireframeRef.current.rotation.y = time * 0.08;
            wireframeRef.current.rotation.x = time * 0.02;
        }
    });

    return (
        <group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={2} color="#ff3333" />

            {/* Inner glowing sphere */}
            <Sphere ref={sphereRef} args={[2.2, 64, 64]}>
                <MeshDistortMaterial
                    color="#ff0000"
                    emissive="#ff0000"
                    emissiveIntensity={2}
                    distort={0.15}
                    speed={2}
                    roughness={0.2}
                />
            </Sphere>

            {/* Outer wireframe sphere */}
            <Sphere ref={wireframeRef} args={[2.6, 32, 32]}>
                <meshStandardMaterial
                    color="#ff6666"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </Sphere>
        </group>
    );
}

export default function GlobeSection() {
    return (
        <div className="w-full h-[500px] md:h-full relative flex items-center justify-center">
            {/* Soft glow background behind the globe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-red-500/20 blur-[120px] rounded-full pointer-events-none" />

            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <SupavecGlobe />
            </Canvas>
        </div>
    );
}
