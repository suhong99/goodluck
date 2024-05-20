import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Mypage() {
  const session = await auth();
  if (!session) return redirect('/');
  return <main>로그인해야 볼 수 있는 페이지</main>;
}
