import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/shared/styles';
import Header from '@/shared/components/header';
import JSONLD from '@/shared/components/JsonLD';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | To be luckier',
    default: '강화하기 | To be luckier',
  },
  description: '사람들의 일상속에서 행운이 가득하길 바라는 프로젝트',
  metadataBase: new URL('https://goodluck-steel.vercel.app/'),
  openGraph: {
    title: {
      template: '%s | To be luckier',
      default: '강화하기 | To be luckier',
    },
    description: '사람들의 일상속에서 행운이 가득하길 바라는 프로젝트',
    images:
      'https://github.com/suhong99/goodluck/assets/120103909/0badeb80-582e-46fb-b2ba-9e7a30a4eab8',
    locale: 'ko_KR',
    url: 'https://goodluck-steel.vercel.app/',
    type: 'website',
    siteName: 'To be luckier',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <JSONLD />

        <main>{children}</main>
        <div id="root-portal" />
      </body>
    </html>
  );
}
