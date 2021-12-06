/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

const MegaMenuMobile = () => {
  useEffect(() => {
    MegaMenu();
  }, []);
  const MegaMenu = () => {
    let acc = document.getElementsByClassName("accordionMobile");
    let accNumber = acc.length;
    let i;
    for (i = 0; i < accNumber; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  };
  return (
    <div className="accordionMenuDivMobile">
      <div className="accordionMenuDivInsideMobile">
        <button className="accordionMobile">
          <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/512/126/126122.png" alt=""></img>
          &nbsp; Men's Clothing
        </button>
        <div className="panelMobile">
          <ul>
            <li>
              <a className="accordionItemMobile">Men's Tshirt</a>
            </li>
            <li>
              <a className="accordionItemMobile">Men's Jacket</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuMobile;
