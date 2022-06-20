import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { Layout } from "../components/Layout";

const About = () => {
  return <div>about</div>;
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "index"])),
      // Will be passed to the page component as props
    },
  };
}

About.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
