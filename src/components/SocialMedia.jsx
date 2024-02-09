import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import {
  FaFacebookF,
  FaGithub,
  FaHackerrank,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialData = [
  {
    Icon: FaLinkedinIn,
    href: "https://linkedin.com/in/ankitkumar68",
    label: "LinkedIn",
  },
  {
    Icon: FaGithub,
    href: "https://github.com/Github2k10/",
    label: "Github",
  },
  {
    Icon: SiLeetcode,
    href: "https://leetcode.com/ankitSingh007/",
    label: "LeetCode",
  },
  {
    Icon: FaHackerrank,
    href: "https://www.hackerrank.com/profile/ankitsingh40068",
    label: "HackerRank",
  },
  {
    Icon: BsInstagram,
    href: "https://www.instagram.com/___its.phoenix/",
    label: "Instagram",
  },
];

const SocialMedia = () => {
  return (
    <div className="app__social">
      {socialData.map((item) => (
        <div key={item.label}>
          <a href={item.href} target="_blank">
            <item.Icon />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
