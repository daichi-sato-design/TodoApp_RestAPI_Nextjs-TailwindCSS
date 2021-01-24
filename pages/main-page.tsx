import { NextPage } from "next";
import Link from "next/link";
import Cookie from "universal-cookie";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const cookie = new Cookie();

const MainPage: NextPage = () => {
  const router = useRouter();
  const logout = () => {
    cookie.remove("access_token");
    router.push("/");
  };
  return (
    <Layout title="main">
      <div className="mb-6">
        <Link href="/blog-page">
          <a className="bg-indigo-500 mr-8 hover:bg-indigo-600 text-white px-4 py-12 rounded">
            Visit Blog by SSG + ISR
          </a>
        </Link>
        <Link href="/task-page">
          <a className="bg-indigo-500 mr-8 hover:bg-indigo-600 text-white px-4 py-12 rounded">
            Visit Task by ISR + CSR
          </a>
        </Link>
      </div>
      <button
        onClick={logout}
        className="w-72 flex justify-center text-white bg-red-500 hover:bg-red-600 mt-12 py-4 px-6 rounded"
      >
        Sign out
      </button>
    </Layout>
  );
};

export default MainPage;
