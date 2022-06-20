import React from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col px-6 mx-auto max-w-7xl min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
