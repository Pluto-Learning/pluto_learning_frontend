import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  jwt: true,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token.user; // Assign token's user to session's user
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user; // Store user in token
      }
      return token;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {
          type: "string",
          required: true,
        },
        email: {
          type: "email",
        },
        password: {
          type: "password",
          required: true,
        },
      },
      authorize: async (credentials) => {
        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/Login/Login`,
            {
              username: credentials.username,
              password: credentials.password,
              email: credentials.email,
            }
          );

          if (data && data.userName) {
            return {
              id: data.userName, // Assuming `userName` is the unique ID
              name: data.userName,
              email: data.email, // Make sure this exists in the response
            };
          }
        } catch (error) {
          console.error(error);
          return null; // Return null if authentication fails
        }
      },
    }),
  ],
});
