import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { loginUserGetToken } from "./lib/api"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Credentials({
    name: "credentials",
    credentials: {
      username: { label: "Email", type: "text", placeholder: "johndoe@gmail.com",},
      password: { label: "Password", type: "password", placeholder: "*****", }
    },
    authorize: async (credentials) => {
      console.log("authorize", credentials);
      let user = null;
      if (typeof credentials.username ==="string" && typeof credentials.password === "string") {
        const userData = {
          username: credentials.username,
          password: credentials.password,
        }
        user = await loginUserGetToken(userData);
        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.")
        }
        return user;
      } else {
        return null
      }
    }
  })],
  session: { strategy: "jwt" },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
  }
})