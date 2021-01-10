import Head from "next/head";

import {} from "next";
import { NextComponentType, NextPageContext } from "next";

interface Props {
  children: any;
  title: string;
}

const Layout: NextComponentType<NextPageContext, {}, Props> = ({
  children,
  title,
}) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-1 justify-center items-center w-screen flex-col">
        {children}
      </main>
      <footer className="text-xs my-2">
        <small>&copy; Udemy 2021</small>
      </footer>
    </div>
  );
};

export default Layout;
