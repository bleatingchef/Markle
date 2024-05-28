import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-6">
      <div className="container flex flex-col items-center gap-8">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 text-n-1">
          <div className="max-w-xs">
            <h3 className="font-bold mb-3 text-base">MARKLE TECH & MEDIA PVT. LTD.</h3>
            <p className="text-sm text-slate-400">
              Markle Tech & Media Pvt. Ltd. is the Best Video Production & Digital Marketing Agency in India. We are providing the best digital marketing, website development, video production & editing service, etc. Because We Care Your Business as Our Business.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-base">OUR SERVICES</h3>
            <ul className="space-y-1 text-sm text-slate-400">
              <li>Social Media Marketing</li>
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>PPC Marketing</li>
              <li>Leads Generation</li>
              <li>Service 2D/3D Animation Service</li>
              <li>SEO Service</li>
              <li>YouTube Marketing</li>
              <li>Video Production Service</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-base">ABOUT COMPANY</h3>
            <ul className="space-y-1 text-sm text-slate-400">
              <li>Humari Kahani</li>
              <li>Testimonials</li>
              <li>Blog</li>
              <li>Tea with us</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-base">CONTACT US</h3>
            <ul className="space-y-1 text-sm text-slate-400">
              <li>
                <a href="mailto:info@markletechandmedia.com" className="hover:text-color-1">
                  info@markletechandmedia.com
                </a>
              </li>
              <li>
                <a href="mailto:markletechandmedia@gmail.com" className="hover:text-color-1">
                  markletechandmedia@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917982332070" className="hover:text-color-1">
                  +91-798-233-2070
                </a>
              </li>
              <li>
                <a href="tel:+917678102159" className="hover:text-color-1">
                  +91-767-810-2159
                </a>
              </li>
              <li className="flex gap-3 mt-3">
                {socials.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    className="flex items-center justify-center w-8 h-8 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                  >
                    <img
                      src={item.iconUrl}
                      width={14}
                      height={14}
                      alt={item.title}
                    />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <p className="caption text-n-4 text-sm">
          Copyright © {new Date().getFullYear()} - Markle Tech & Media Pvt. Ltd.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
