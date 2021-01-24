import { NextComponentType } from "next";
// useRouter コンポーネントからページ遷移するとき必要

const Auth: NextComponentType = () => {
  return (
    <div className="max-w-md w-full">
      <div className="space-y-6">
        <h2 className="text-center text-3xl font-extrabold text-white">
          Sign in with Google
        </h2>
        <a
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          href={`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/auth/google/oauth2`}
        >
          Sign in with google
        </a>
      </div>
    </div>
  );
};

export default Auth;
