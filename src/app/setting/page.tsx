"use client";

import Link from "next/link";
import "./setting.css";
import React from "react";
import { useRouter } from "next/navigation";

export default function Setting() {
  const router = useRouter();
  const onRoutePushClick = () => {
    router.push("/home");
  };
  return (
    <>
      <p>There are four ways to navigate between routes in Next.js</p>
      <ul>
        <li>
          - Using the <code>&lt;Link&gt;</code> Component{" "}
          <Link className="link" href="/">
            "Go Home"
          </Link>
        </li>
        <li>
          {" "}
          - Using the useRouter hook (Client Components){" "}
          <span onClick={onRoutePushClick}>"route push to home"</span>
        </li>
        <li>- Using the redirect function (Server Components)</li>
        <li>- Using the native History API</li>
      </ul>
    </>
  );
}
