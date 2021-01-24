import { NextComponentType, NextPageContext } from "next";
import { FormEvent, useState } from "react";
// useRouter コンポーネントからページ遷移するとき必要
import { useRouter } from "next/router";
import Cookie from "universal-cookie";

const cookie = new Cookie();

interface Attributes {
  email: string;
  googleId: string;
}

const Registry: NextComponentType<NextPageContext, {}, Attributes> = ({
  email,
  googleId,
}) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [biography, setBiography] = useState("");
  const [discodeId, setDiscodeId] = useState("");
  const [discodeNumber, setDiscodeNumber] = useState("");

  const login = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/auth/jwt/create`, {
      method: "POST",
      body: JSON.stringify({
        googleId: googleId,
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status == 400) {
          throw "authentication failed";
        } else if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        const options = { path: "/" };
        cookie.set("access_token", data.access, options);
      });
    router.push("/main-page");
  };

  const registry = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/auth/register/`, {
        method: "POST",
        body: JSON.stringify({
          googleId: googleId,
          email: email,
          username: username,
          name: name,
          biography: biography,
          discodeId: discodeId,
          discodeNumber: discodeNumber,
        }),
        headers: { "Content-Type": "spplication/json" },
      }).then((res) => {
        if (res.status === 400) {
          throw "authentication failed";
        }
      });
      login();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={registry}>
      <input type="hidden" name="remember" value="true" />
      <div className="shadow-sm space-y-2">
        <div>
          <input
            name="username"
            type="text"
            autoComplete="username"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="ユーザーID"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            name="name"
            type="text"
            autoComplete="nickname"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="ニックネーム"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            name="biography"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="自己紹介"
            value={biography}
            onChange={(e) => {
              setBiography(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            name="discodeId"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="discodeId"
            value={discodeId}
            onChange={(e) => {
              setDiscodeId(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center">
          <p className="text-xs display-block mr-2">#</p>
          <input
            name="discodeNumber"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="0000"
            value={discodeNumber}
            onChange={(e) => {
              setDiscodeNumber(e.target.value);
            }}
          />
        </div>
        <button
          onSubmit={() => {
            console.log(googleId);
            console.log(email);
            console.log(username);
            console.log(name);
            console.log(biography);
            console.log(discodeId);
            console.log(discodeNumber);
          }}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          登録する
        </button>
      </div>
    </form>
  );
};

export default Registry;
