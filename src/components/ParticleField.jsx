import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleField({ count = 3000 }) {
  const mesh = useRef()
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40
      const y = (Math.random() - 0.5) * 40
      const z = (Math.random() - 0.5) * 40
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [count])

  useFrame((_, delta) => {
    mesh.current.rotation.x += delta * 0.02
    mesh.current.rotation.y += delta * 0.01
  })

  return (
    <group ref={mesh}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#00D4FF"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </group>
  )
}
