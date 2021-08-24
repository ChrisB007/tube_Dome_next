import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    // OAuth authentication providers
    Providers.Twitter({
      clientId: process.env.TWITTER,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Sign in with passwordless email link
    Providers.Email({
      server: process.env.MAIL_SERVER,
      from: "<no-reply@example.com>",
    }),
  ],
  // SQL or MongoDB database (or leave empty)
  // database: process.env.DATABASE_URL,
});
