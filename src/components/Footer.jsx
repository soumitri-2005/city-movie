import React from "react";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../assets/city-movie-logo.png";

const Footer = () => {
  return (
    <>
      <div className="h-auto w-full bg-[var(--gold-color)] flex py-5">
        <div className="text-[var(--maroon-color)] text-center flex flex-col sm:flex-row justify-evenly items-center w-full mx-auto gap-3">
          {/* Logo */}
          <img src={logo} alt="city-movie-logo" className="h-[6vh]" />

          {/* Address + Copyright */}
          <div className="leading-2">
            <p className="text-[12px] sm:text-[15px] mt-1 font-[500] flex items-center justify-center">
              <LocationPinIcon fontSize="small" className="mr-1" />
              CDA, Sec-10, Cuttack, Odisha
            </p>
            <p className="text-[11px] sm:text-[12px] mt-1 font-[500]">
              Copyright &copy; 2025 My Website. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div>
            <a href="https://www.facebook.com/share/1B9ueEcDLX/">
              <FacebookIcon
                className="text-[var(--maroon-color)] mx-2 cursor-pointer"
                style={{ fontSize: "2rem" }}
              />
            </a>
            <a href="https://www.instagram.com/m.mishra72_?igsh=ZnByYnk0ZWtzcXFp">
              <InstagramIcon
                className="text-[var(--maroon-color)] mx-2 cursor-pointer"
                style={{ fontSize: "2rem" }}
              />
            </a>
            <a href="https://youtube.com/@citymovie1972?si=W9eN57fdNdYpEbOY">
              <YouTubeIcon
                className="text-[var(--maroon-color)] mx-2 cursor-pointer"
                style={{ fontSize: "2.2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
