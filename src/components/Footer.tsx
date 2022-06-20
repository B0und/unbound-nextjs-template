import { useTranslation } from "next-i18next";
import React from "react";

export const Footer = () => {
  const { t } = useTranslation("common");

  return <div className="pb-6 mt-auto text-center text-gray-400">{t("footerText")}</div>;
};
