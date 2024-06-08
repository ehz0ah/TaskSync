"use client";
import Alert from "@/app/(platform)/_parts/alert";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="w-[30vw] flex flex-col items-center justify-center px-4 py-8 bg-transparent sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign In
          </h2>
        </div>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <Button
              onClick={() => {
                signIn("google", { callbackUrl: "/workspace" });
              }}
              className="relative flex items-center justify-center w-full px-4 py-2 mb-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg group hover:bg-gray-50"
            >
              <ChromeIcon className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
              <span className="ml-2">Continue with Google</span>
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                window.alert("Coming Soon!!");
              }}
              className="relative flex items-center justify-center w-full px-4 py-2 mb-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg group hover:bg-gray-50"
            >
              <GithubIcon className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
              <span className="ml-2">Continue with Github</span>
            </Button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            {/* <div className="w-full border-t border-gray-300" /> */}
          </div>
          <div className="relative z-10 px-2 text-md text-center text-white font-extrabold">
            Or
          </div>
        </div>
        <form action="#" className="mt-8 space-y-6" method="POST">
          <input defaultValue="true" name="remember" type="hidden" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only" htmlFor="email-address">
                Email address
              </label>
              <input
                autoComplete="email"
                className="relative block w-full px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                // defaultValue="Alex@gmail.com"
                id="email-address"
                name="email"
                placeholder="Email Address"
                required
                type="email"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <input
                autoComplete="current-password"
                className="relative block w-full px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                // defaultValue="********"
                id="password"
                name="password"
                placeholder="Password"
                required
                type="password"
              />
            </div>
          </div>
          <div>
            <Button
              onClick={() => {
                window.alert("Coming Soon!!");
              }}
              className="group relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="submit"
            >
              Log in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
