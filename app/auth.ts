import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

class InvalidLoginError extends CredentialsSignin {
  code: string;
  constructor(message: string) {
    super(message);
    this.code = message;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true, // Add this line
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (Credentials) => {
        if (!Credentials?.username || !Credentials?.password) {
          throw new InvalidLoginError(
            "Please provide both username and password"
          );
        }

        const user = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: Credentials.username,
            password: Credentials.password,
            expiresInMins: 30,
          }),
          credentials: "include",
        });

        const userData = await user.json();

        console.log("User Data:", userData);

        if (user.ok && userData) {
          return {...userData, name: userData.firstName + " " + userData.lastName};
        } else {
          throw new InvalidLoginError("Invalid username or password");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});