'use client';

import { SessionContextValue, useSession } from 'next-auth/react';
import React from 'react';
export const SessionContext = React.createContext?.<
  SessionContextValue | undefined
>(undefined);

export default function Handler() {
  // const value = React.useContext(SessionContext);
  // console.log(value, '머임');
  const { data } = useSession();

  return <div>gd</div>;
}
