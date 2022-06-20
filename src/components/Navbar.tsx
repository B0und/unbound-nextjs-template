import React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";

const navLinks = [
  {
    id: "Home",
    href: "/",
  },
  {
    id: "About",
    href: "/about",
  },
];
export const Navbar = () => {
  const router = useRouter();

  return (
    <header className="flex flex-row justify-between my-9">
      <h1 className="font-medium text-cyan-400">unbound project</h1>
      <ul className="flex gap-8">
        {navLinks.map(({ id, href }) => (
          <li key={id}>
            <Link href={href} passHref>
              <a className={clsx({ "border-b-2 border-amber-400": href === router.pathname })}>
                {id}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
