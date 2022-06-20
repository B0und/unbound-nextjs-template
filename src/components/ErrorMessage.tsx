import React from "react";
import { useTranslation } from "next-i18next";

const ErrorMessage = ({ message }: { message: string }) => {
  const { t } = useTranslation("common");
  return (
    <p>
      {t("error")}: {message}
    </p>
  );
};

export default ErrorMessage;
