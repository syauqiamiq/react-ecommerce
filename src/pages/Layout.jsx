import React, { useEffect } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";

const Layout = (props) => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>
      <div className="Mobile">
        <NavMenuMobile />
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
