import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import LocaleSwitcher from "./LocaleSwitcher";

const navLinks = [
  {
    id: "home",
    href: "/",
  },
  {
    id: "about",
    href: "/about",
  },
];
export const Navbar = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <header className="flex flex-row justify-between my-9">
      <h1 className="font-medium text-cyan-400">unbound project</h1>
      <ul className="flex gap-8">
        {navLinks.map(({ id, href }) => (
          <li key={id}>
            <Link href={href} passHref>
              <a className={clsx({ "border-b-2 border-amber-400": href === router.pathname })}>
                {t(id)}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <LocaleSwitcher />
    </header>
  );
};
