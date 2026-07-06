import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Torus, useTexture } from '@react-three/drei'
import affanImg from '../assets/affan.svg'

export default function FloatingAvatar() {
  const groupRef = useRef()
  const texture = useTexture(affanImg)

  useFrame(({ clock }) => {
    groupRef.current.position.x = Math.cos(clock.elapsedTime * 0.5) * 3
    groupRef.current.position.z = Math.sin(clock.elapsedTime * 0.5) * 3
    groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.3) * 0.5
    groupRef.current.rotation.y += 0.01
  })

  return (
    <group ref={groupRef}>
      <Torus args={[2.2, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#915EFF" emissive="#915EFF" emissiveIntensity={0.5} />
      </Torus>
      <mesh>
        <circleGeometry args={[2, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  )
}
