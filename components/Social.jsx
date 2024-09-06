import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaTelegram} from 'react-icons/fa'

const socials = [
  { icon: <FaTelegram />, path: "https://t.me/GorSaroyan" },
  { icon: <FaGithub />, path: "https://github.com/saroyangor" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/docthor/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} target="_blank" className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
