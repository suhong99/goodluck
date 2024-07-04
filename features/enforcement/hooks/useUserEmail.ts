import { useSession } from 'next-auth/react';

export const useUserEmail = () => {
  const { data } = useSession();
  const userEmail = data?.user?.email;

  return userEmail;
};
