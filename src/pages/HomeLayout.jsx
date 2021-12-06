import React, { useEffect } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import HomeTopMobile from "../components/home/HomeTopMobile";
import HomeTop from "../components/home/HomeTop";

const Layout = (props) => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
        <HomeTop />
      </div>
      <div className="Mobile">
        <NavMenuMobile />
        <HomeTopMobile />
      </div>

      {props.children}

      <div className="Desktop">
        <FooterDesktop />
      </div>
      <div className="Mobile">
        <FooterMobile />
      </div>
    </>
  );
};

export default Layout;
