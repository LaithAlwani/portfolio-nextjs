import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav>
      <div className="logo">
        <Link href="/">
          {/* <span className="logo-icon">LA</span>  */}
          <a>
            <Image
              src="/images/logo.png"
              width={64}
              height={64}
              alt="logo"
            />
          </a>
        </Link>
      </div>
      <Link href="/">
        <a className={pathname === "/" ? "btn link active" : "btn link"}>
          About
        </a>
      </Link>
      <Link href="/portfolio">
        <a
          className={pathname === "/portfolio" ? "btn link active" : "btn link"}
        >
          Portfolio
        </a>
      </Link>
      <Link href="/contact">
        <a className={pathname === "/contact" ? "btn link active" : "btn link"}>
          Contact
        </a>
      </Link>
    </nav>
  );
}
