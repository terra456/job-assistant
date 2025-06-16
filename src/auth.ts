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
      if (typeof credentials.username === "string" && typeof credentials.password === "string") {
        const userData = {
          username: credentials.username,
          password: credentials.password,
        }
        const apiUser = await loginUserGetToken(userData);
        if (!apiUser) {
          throw new Error("Invalid credentials.")
        }
        // Map your user object to the NextAuth User shape
        const nextAuthUser = {
          id: apiUser.username?.toString() ?? apiUser.username ?? "unknown",
          name: apiUser.username ?? apiUser.username ??  "",
          apiToken: apiUser.apiToken ?? "",
        };
        return nextAuthUser;
      } else {
        return null
      }
    }
  })],
  session: { strategy: "jwt" },
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("redirect", url, baseUrl);
      return baseUrl
    },
  }
})