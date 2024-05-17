import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/shared/styles';
import SessionProvider from '@/shared/components/auth/SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'To Be luckier',
  description: '사람들의 일상속에서 행운이 가득하길 바라는 프로젝트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
