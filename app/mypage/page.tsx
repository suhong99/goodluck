import { auth } from '@/auth';
import Record from '@/features/mypage/Record';

export default async function Mypage() {
  const session = await auth();
  return (
    <main>
      <Record userEmail={session?.user?.email!} />
    </main>
  );
}
