/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1>Home Page</h1>
      <p>This is the main page. You can see all non-protected routes even if you aren't logged in!</p>
      <p>
        <a href="#" onClick={() => router.push('/restricted')} className="text-white-50">
          Try to go to this Restricted Page while You are logged out.
        </a>
      </p>
    </>
  )
}
