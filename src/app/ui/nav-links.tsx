"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import "./nav-links.css";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav>
      <Link className={`link ${pathname === "/" ? "active" : ""}`} href={"/"}>
        Home
      </Link>
      <Link
        className={`link ${pathname === "/setting" ? "active" : ""}`}
        href="/setting"
      >
        Setting
      </Link>
      <Link
        className={`link ${pathname === "/setting" ? "active" : ""}`}
        href="/marketing"
      >
        marketing
      </Link>
      <Link
        className={`link ${pathname === "/setting" ? "active" : ""}`}
        href="/shop"
      >
        shop
      </Link>
    </nav>
  );
}
