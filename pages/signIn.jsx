import {
  GoogleLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import { providers, signIn, getSession, csrfToken } from "next-auth/client";

function Signin({ providers, csrfToken }) {
  return (
    <div className="min-h-screen bg-gray-500 flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-2xl font-extrabold text-white">
              Gain access to your account
            </h2>
          </div>

          <div className="mt-8">
            <div>
              <div>
                <p className="text-sm font-medium text-white">
                  Enter your email for password-less login
                </p>

                <div className="mt-6">
                  <form
                    action="api/auth/signin/email"
                    method="POST"
                    className="space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        name="email"
                        className="block text-sm font-medium text-white"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          name="csrfToken"
                          type="hidden"
                          defaultValue={csrfToken}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <input
                          id="email"
                          name="email"
                          type="text"
                          placeholder="Your email"
                          autoComplete="email"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Gain Access
                      </button>
                    </div>
                  </form>
                </div>

                <div className="mt-6 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-900">
                      Or with a provider
                    </span>
                  </div>
                </div>
                <div className="m-4">
                  {Object.values(providers).map((provider) => {
                    if (provider.name === "Email") {
                      return;
                    } else if (provider.name === "Google") {
                      return (
                        <GoogleLoginButton
                          onClick={() => signIn(provider.id)}
                        />
                      );
                    } else if (provider.name === "Twitter") {
                      return <TwitterLoginButton />;
                    }
                    return (
                      <div className="w-full" key={provider.name}>
                        <div>
                          <button
                            className="provider-button w-6/12 justify-center items-center px-4 m-4  h-14"
                            onClick={() => signIn(provider.id)}
                          >
                            Sign in with {provider.name}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/login.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Signin;

Signin.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/dashboard",
    });

    res.end();
    return;
  }
  return {
    session: undefined,
    providers: await providers(context),
    csrfToken: await csrfToken(context),
  };
};
