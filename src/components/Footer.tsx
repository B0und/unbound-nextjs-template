import React from "react";
import { useTranslation } from "next-i18next";

export const Footer = () => {
  const { t } = useTranslation("common");

  return <div className="pb-6 mt-auto text-center text-gray-400">{t("footerText")}</div>;
};
