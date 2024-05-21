import { auth } from '@/auth';
import Record from '@/features/mypage/Record';

export default async function Mypage() {
  const session = await auth();
  return (
    <main>
      로그인해야 볼 수 있는 페이지
      <Record userEmail={session?.user?.email!} />
    </main>
  );
}
