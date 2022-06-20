import React from "react";
import { Layout } from "../components/Layout";

const About = () => {
  return <div>about</div>;
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
