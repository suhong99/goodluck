import { auth } from '@/auth';
import { SignIn } from './AuthComponent';
import Image from 'next/image';

export default async function AuthButton() {
  const session = await auth();
  if (!session?.user) return <SignIn />;

  return (
    <Image
      src={session.user.image!}
      alt="내구글이미지"
      width={50}
      height={50}
    />
  );
}
