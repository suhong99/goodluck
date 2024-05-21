'use client';

import { getAndCleanupEnforceRecords } from '@/remote/enforcement';

export default function Button({ user }: { user: string }) {
  return <div onClick={() => getAndCleanupEnforceRecords(user)}>Button</div>;
}
