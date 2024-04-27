import NextAuth, { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';

export const config = {
  theme: { logo: 'https://authjs.dev/img/logo-sm.png' },
  providers: [Google],
  // callbacks: {
  //   authorized({ request, auth }) {
  //     const { pathname } = request.nextUrl;
  //     if (pathname === '/middleware-example') return !!auth;
  //     return true;
  //   },
  //   jwt({ token, trigger, session }) {
  //     if (trigger === 'update') token.name = session.user.name;
  //     return token;
  //   },
  // },
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(config);
