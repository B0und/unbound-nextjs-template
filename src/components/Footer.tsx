import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <Link href="https://github.com/B0und/unbound-nextjs-template" passHref>
      <a
        className="p-4 pb-6 mx-auto mt-auto w-fit text-center text-gray-400 hover:text-amber-400"
        target="_blank"
      >
        {t("footerText")}
      </a>
    </Link>
  );
};
