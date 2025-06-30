import React from "react";
import { useGLTF } from "@react-three/drei";

export function GhostRider(props) {
  const { scene } = useGLTF("/models/ghost_rider_2099_-_zero.glb");
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/ghost_rider_2099_-_zero.glb");
