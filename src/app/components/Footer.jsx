import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link
          href={"/"}
          className="text-2xl md:text-2xl text-white font-semibold"
        >
          <div className="bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">MrGharbi.</div>
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
