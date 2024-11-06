import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={30} />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;