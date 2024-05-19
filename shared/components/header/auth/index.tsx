import { auth } from '@/auth';
import { SignIn, SignOut } from './AuthComponent';

export default async function AuthButton() {
  const session = await auth();
  if (!session?.user) return <SignIn />;

  return (
    <div>
      {session.user.email}
      <SignOut />
    </div>
  );
}
