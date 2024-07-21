import Image from "next/image";
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="mt-4 border-t border-gray-300 py-8 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="text-center mb-4">
        <Image width={60} height={60} alt="logo" src="/assets/ahead-logo.png" className="mx-auto" />
        <p className="text-xl font-bold text-violet-700 mt-2">ahead</p>
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8 font-semibold mt-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-300 text-white">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <span>AugustraBe 26, 10117 Berlin</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-300 text-white">
            <i className="fas fa-envelope"></i>
          </div>
          <span>hi@ahead-app.com</span>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Image
          src="/assets/appleStoreIcon.svg"
          alt="download app store"
          width={150}
          height={150}
          className="max-w-full h-auto"
        />
      </div>
      <div className="text-center text-sm text-gray-500 mt-4">
        &copy; Ahead App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
