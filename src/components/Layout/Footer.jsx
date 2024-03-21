import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By CodeWithPriyanshu.</div>
      <div>
        <Link to={"https://www.facebook.com/priyanshu.shrivastav.3958"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/singhpsv"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/priyanshu-shrivastava02"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/priyanshu_3._"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
