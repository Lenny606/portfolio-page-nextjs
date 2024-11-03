"use client"

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export default function Model(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/tornado-transformed.glb')
    const { actions } = useAnimations(animations, group)
    const modelRef = useRef();

    useFrame((state, delta) => {
        // Centering and adding a slow rotation
        modelRef.current.position.y = 0
        modelRef.current.rotation.y += delta * 0.2; // Adjust rotation speed as needed
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="GLTF_SceneRootNode">
                    <group name="root_39" rotation={[0.25, 0, 0]} scale={0.05} ref={modelRef}>
                        <group name="funnel_bone_38">
                            <group name="GLTF_created_2">
                                <primitive object={nodes.GLTF_created_2_rootJoint} />
                                <skinnedMesh
                                    name="Object_8"
                                    geometry={nodes.Object_8.geometry}
                                    material={materials['Material.001']}
                                    skeleton={nodes.Object_8.skeleton}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/tornado-transformed.glb')