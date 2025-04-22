// src/components/CosmicBackground.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const CosmicBackground = () => {
  return (
    // MODIFIED: Removed fixed positioning, make it fill parent relatively
    // Added overflow-hidden
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars
          radius={100}      // Distance of stars from center
          depth={80}        // Star layers depth
          count={5000}      // Reduced star count
          factor={3}        // Reduced star size
          saturation={0}    // Kept stars white
          fade              // Stars fade in the distance
          speed={1.5}       // Slightly increased rotation speed
        />
      </Canvas>
    </div>
  );
};

export default CosmicBackground;