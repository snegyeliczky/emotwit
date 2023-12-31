import Head from "next/head";

import { api } from "~/utils/api";
import { SignInButton, useAuth, UserButton } from "@clerk/nextjs";

export default function Home() {
  const user = useAuth();
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const tRPCRes = hello?.data?.greeting;
  const quickStyle = { color: "white" };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {user.isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton afterSignInUrl={"/"} />
        )}
        {user.isSignedIn && <p style={quickStyle}> {tRPCRes} </p>}
      </main>
    </>
  );
}
