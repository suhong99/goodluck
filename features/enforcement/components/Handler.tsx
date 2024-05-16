'use client';

import { Html } from '@react-three/drei';
import { useSession } from 'next-auth/react';

export default function Handler() {
  const { data } = useSession();
  return <Html>gd</Html>;
}
