import React from "react";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  const date = new Date();
  const links = [
    {
      id: 1,
      name: "ব্লগ",
      path: "/",
    },
    {
      id: 2,
      name: "ক্রেডিট",
      path: "/",
    },
    {
      id: 3,
      name: "সাকসেস স্টোরি",
      path: "/",
    },
    {
      id: 4,
      name: "আমাদের সম্পর্কে",
      path: "/",
    },
    {
      id: 5,
      name: "প্রাইভেসি পলিসি",
      path: "/",
    },
    {
      id: 6,
      name: "টার্মস ও কন্ডিশনস",
      path: "/",
    },
  ];
  const socials = [
    { id: 1, name: "facebook", icon: <FaFacebook />, url: "" },
    { id: 2, name: "youtube", icon: <FaYoutube />, url: "" },
    { id: 3, name: "linkedin", icon: <AiFillLinkedin />, url: "" },
    { id: 4, name: "github", icon: <FaGithub />, url: "" },
  ];
  return (
    <footer className="mt-section relative">
      <div className="footer-video -z-[10] absolute top-0 left-0 h-full w-full">
        {/* <video
          className="w-full opacity-5 object-cover bg-red-500 h-full object-center"
          autoPlay
          loop
          muted
        >
          <source src="/files/bg-video.mp4" type="video/mp4" />
        </video> */}
      </div>

      <div className=" bg-base-3  pt-12 site-container bg-opacity-40">
        <div className="flex flex-col gap-y-6 md:flex-row border-b pb-6 border-base-3 justify-between ">
          <div className="description">
            <h2 className="text-lg 2xl:text-xl font-medium">অফিসঃ </h2>
            <div className="mt-2 2xl:text-lg">
              <p>Rangpur</p>
              <p>
                Support:{" "}
                <span className="text-primary">aohinuzzaman420@gmail.com</span>
              </p>
              <p>
                {" "}
                Helpline: <span className="text-primary">01313386702</span>
              </p>
            </div>
          </div>
          <div className="links">
            <h2 className="text-lg 2xl:text-xl font-medium">
              গুরুত্বপূর্ণ লিঙ্কসঃ{" "}
            </h2>
            <ul className="mt-2 2xl:text-lg">
              {links.map((item, index) => (
                <li key={item?.id}>
                  <Link
                    to={item?.path}
                    className="hover:text-primary duration-500"
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="follow">
            <h2 className="text-lg 2xl:text-xl font-medium">আমাদের তথ্যঃ </h2>
            <ul className="mt-2 2xl:text-lg flex gap-x-3">
              {socials.map((item) => (
                <li key={item?.id}>
                  <Link
                    to={item?.url}
                    className="hover:text-primary duration-500"
                  >
                    {item?.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center py-4 justify-center">
          <p>
            কপিরাইট ©{date.getFullYear()} <span className="text-primary">অহন খান</span>। সর্বস্বত্ব
            সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
