"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import {
  BiLogoDiscord,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTiktok,
  BiLogoTwitch,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

const Footer = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const toggleAccordion = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <footer className="bg-black text-white p-6 lg:bg-gray-900 footer">
      <div className="container mx-auto">
        <div className="space-y-4 lg:grid lg:grid-cols-6 lg:gap-4 lg:border-b lg:border-gray-400 lg:space-y-0">
          {/* Shop Section */}
          <div className="border-b border-gray-600 pb-2 lg:border-none">
            <div
              className="flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleAccordion(0)}
            >
              <span className="text-lg lg:text-base">Shop</span>
              <span className="text-xl lg:hidden">
                {expanded[0] ? <FaTimes className="text-sm" /> : "+"}
              </span>
            </div>
            {(expanded[0] || !expanded[0]) && (
              <ul
                className={`mt-2 space-y-2 text-gray-400 text-sm lg:block ${
                  expanded[0] ? "" : "hidden lg:block"
                }`}
              >
                <li>
                  <a href="https://www.razer.com/razerstores">RazerStores</a>
                </li>
                <li>
                  <a href="https://www.razer.com/razercafe">RazerCafe</a>
                </li>
                <li>
                  <a href="https://www.razer.com/store-finder">Store Locator</a>
                </li>
                <li>
                  <a href="https://www.razer.com/store/programs">
                    Purchase Programs
                  </a>
                </li>
                <li>
                  <a href="https://www.razer.com/store/bulk-purchase">
                    Bulk Order Program
                  </a>
                </li>
                <li>
                  <a href="https://www.razer.com/education">Education</a>
                </li>
                <li>
                  <a href="https://www.razer.com/only-at-razer">
                    Only at Razer
                  </a>
                </li>
                <li>
                  <a href="https://www.razer.com/store/rewards">
                    RazerStore Rewards
                  </a>
                </li>
                <li>
                  <a href="https://www.razer.com/newsletter">Newsletter</a>
                </li>
              </ul>
            )}
          </div>

          {/* Explore Section */}
          <div className="border-b border-gray-600 pb-2 lg:border-none ">
            <div
              className="flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleAccordion(1)}
            >
              <span className="text-lg lg:text-base">Explore</span>
              <span className="text-xl lg:hidden">
                {expanded[1] ? <FaTimes className="text-sm" /> : "+"}
              </span>
            </div>
            {(expanded[1] || !expanded[1]) && (
              <ul
                className={`mt-2 space-y-2 text-gray-400 text-sm lg:block ${
                  expanded[1] ? "" : "hidden lg:block"
                }`}
              >
                <li>
                  <a href="https://www.razer.com/technology">Technology</a>
                </li>
                <li>
                  <a href="https://www.razer.com/chroma">Chroma RGB</a>
                </li>
                <li>
                  <a href="https://www.razer.com/concepts">Concepts</a>
                </li>
                <li>
                  <a href="https://www.razer.com/esports">Esports</a>
                </li>
                <li>
                  <a href="https://www.razer.com/lifestyle/collabs">Collabs</a>
                </li>
              </ul>
            )}
          </div>

          {/* Support Section */}
          <div className="border-b border-gray-600 pb-2 lg:border-none">
            <div
              className="flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleAccordion(2)}
            >
              <span className="text-lg lg:text-base">Support</span>
              <span className="text-xl lg:hidden">
                {expanded[2] ? <FaTimes className="text-sm" /> : "+"}
              </span>
            </div>
            {(expanded[2] || !expanded[2]) && (
              <ul
                className={`mt-2 space-y-2 text-gray-400 text-sm lg:block ${
                  expanded[2] ? "" : "hidden lg:block"
                }`}
              >
                <li>
                  <a href="https://mysupport.razer.com/?c=us">Get Help</a>
                </li>
                <li>
                  <a href="https://www.razer.com/product-registration">
                    Registration & Warranty
                  </a>
                </li>
                <li>
                  <a href="https://www.razer.com/razerstore-support">
                    RazerStore Support
                  </a>
                </li>
                <li>
                  <a href="https://www.razer.com/razercare">RazerCare</a>
                </li>
                <li>
                  <a href="https://razerid.razer.com">Manage Razer ID</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos">
                    Support Videos
                  </a>
                </li>
                <li>
                  <a href="https://mysupport.razer.com/app/answers/detail/a_id/5904">
                    Recycling Program
                  </a>
                </li>
                <li>
                  <a href="https://www.razer.com/legal/commitment-to-accessibility">
                    Accessibility Statement
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Company Section */}
          <div className="border-b border-gray-600 pb-2 lg:border-none">
            <div
              className="flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleAccordion(3)}
            >
              <span className="text-lg lg:text-base">Company</span>
              <span className="text-xl lg:hidden">
                {expanded[3] ? <FaTimes className="text-sm" /> : "+"}
              </span>
            </div>
            {(expanded[3] || !expanded[3]) && (
              <ul
                className={`mt-2 space-y-2 text-gray-400 text-sm lg:block ${
                  expanded[3] ? "" : "hidden lg:block"
                }`}
              >
                <li>
                  <a href="https://www.razer.com/about ">About Us</a>
                </li>
                <li>
                  <a href="https://www.razer.com/careers">Careers</a>
                </li>
                <li>
                  <a href="https://www.razer.com/newsroom">Newsroom</a>
                </li>
              </ul>
            )}
          </div>
          <div className="hidden lg:flex lg:flex-col">
            <span className="text-lg lg:text-base">Follow Us</span>
            <div className="flex flex-col space-y-2 text-gray-400 text-base py-2 social">
              <div className="flex items-center justify-center w-6 h-6 bg-gray-900 border-[1px] border-gray-200 rounded-full">
                <BiLogoFacebook />
              </div>
              <div className="flex items-center justify-center w-6 h-6 bg-gray-900 border-[1px] border-gray-200 rounded-full">
                <BiLogoInstagram />
              </div>
              <div className="flex items-center justify-center w-6 h-6 bg-gray-900 border-[1px] border-gray-200 rounded-full">
                <BiLogoTwitter />
              </div>
              <div className="flex items-center justify-center w-6 h-6 bg-gray-900 border-[1px] border-gray-200 rounded-full">
                <BiLogoYoutube />
              </div>
              <div className="flex items-center justify-center w-6 h-6 bg-gray-900 border-[1px] border-gray-200 rounded-full">
                <BiLogoTiktok />
              </div>
              <div className="flex items-center justify-center w-6 h-6 bg-gray-900 border-[1px] border-gray-200 rounded-full">
                <BiLogoTwitch />
              </div>
              <div className="flex items-center justify-center w-6 h-6 bg-gray-900 border-[1px] border-gray-200 rounded-full">
                <BiLogoDiscord />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="hidden lg:block text-green-400 text-[15px] text-nowrap">
              FOR GAMERS. BY GAMERS.™
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center lg:flex lg:justify-between lg:items-center lg:px-4 lg:m-0 lg:py-4">
          <div className="text-xs mb-6 lg:m-0">
            <p>Copyright © 2024 Razer Inc. All rights reserved.</p>
          </div>
          <div className="flex justify-center space-x-1 mt-2 text-xs text-gray-500 md:space-x-4 lg:m-0">
            <a href="https://www.razer.com/sitemap">Site Map</a>

            <a href="https://www.razer.com/legal">Legal Terms</a>
            <a href="https://www.razer.com/legal/customer-privacy-policy">
              Privacy Policy
            </a>
            <button>Cookie Settings</button>
          </div>
          <hr className="text-gray-400 mt-8" />
          <div className="mt-4 text-xs">
            <a href="#" className="">
              United States | Change Location &gt;
            </a>
          </div>
          <div className="mt-4 lg:hidden">
            <p className="text-green-400">FOR GAMERS. BY GAMERS.™</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
