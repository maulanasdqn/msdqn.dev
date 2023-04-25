import NextAuth, { NextAuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  TCommonError,
  TLoginPayload,
  loginByGoogleRequest,
  loginRequest,
  TLoginData,
} from "@/modules";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: "login",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<TLoginData> {
        try {
          const { data } = await loginRequest(credentials as TLoginPayload);
          return data;
        } catch (err) {
          const error = err as TCommonError;
          if (error?.response?.status === 422) {
            throw new Error(error?.response?.data?.message);
          }
          throw new Error(
            typeof error?.response?.data === "string"
              ? error.response.data
              : error?.response?.data?.message,
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    //TODO handle Remember me
    // maxAge: req.body.rememberMe === 'true' ? 30 * 24 * 60 * 60 : 2 * 60 * 60,
    maxAge: 2 * 60 * 60,
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" && account) {
        try {
          const response = await loginByGoogleRequest({
            access_token: account.access_token as string,
          });
          account.access_token = response.data.access_token;
          user.name = response.data.user.name;
          user.email = response.data.user.email;
        } catch (err) {
          const error = err as TCommonError;
          return `/auth/login?error=${error?.response?.data?.message}`;
        }
      }

      if (user) return true;
      return false;
    },
    async jwt({ token, user, account }) {
      const currentUser = user as unknown as TLoginData;
      if (account?.provider === "google" && account) {
        token.access_token = account.access_token;
      } else if (account?.provider === "login" && currentUser) {
        token.access_token = currentUser.access_token;
        currentUser.name = user.name;
        currentUser.email = user.email;
      }

      return { ...token, ...currentUser };
    },
    async session({ session, token }) {
      const user = {
        name: token.name,
        email: token.email,
      };
      session.user = user;
      return session;
    },
  },
};

export default NextAuth(authOptions);
