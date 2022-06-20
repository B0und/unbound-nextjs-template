import { ReactElement } from "react";
import { useQuery } from "react-query";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ErrorMessage from "../components/ErrorMessage";
import { Layout } from "../components/Layout";

import { NextPageWithLayout } from "./_app";

export const useTodos = () => {
  return useQuery("todos", () =>
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((r) => r.json())
  );
};
const Index: NextPageWithLayout = () => {
  const { t } = useTranslation("index");
  const { isLoading, error, data } = useTodos();

  if (error instanceof Error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <main className="flex flex-col">
      <Head>
        <title>Unbound template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-lg text-amber-400">{t("helloWorld")}</p>
      <h2>{t("apiData")}:</h2>
      {isLoading && <p>Loading ...</p>}
      <p>{data?.title}</p>
    </main>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "index"])),
      // Will be passed to the page component as props
    },
  };
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Index;
