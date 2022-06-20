import { useTranslation } from "next-i18next";
import React from "react";

const ErrorMessage = ({ message }: { message: string }) => {
  const { t } = useTranslation("common");
  return (
    <p>
      {t("error")}: {message}
    </p>
  );
};

export default ErrorMessage;
