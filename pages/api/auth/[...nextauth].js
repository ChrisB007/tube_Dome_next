import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    // OAuth authentication providers
    // Providers.Twitter({
    //   clientId: process.env.TWITTER,
    //   clientSecret: process.env.TWITTER_SECRET,
    //   icon: "/images/twitter.png",
    // }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Sign in with passwordless email link
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],

  pages: {
    signIn: "/signIn",
    signOut: "/",
  },

  // SQL or MongoDB database (or leave empty)
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
