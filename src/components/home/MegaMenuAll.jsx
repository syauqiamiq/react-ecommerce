/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

const MegaMenuAll = () => {
  useEffect(() => {
    MegaMenu();
  }, []);
  const MegaMenu = () => {
    let acc = document.getElementsByClassName("accordionAll");
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
    <div className="accordionMenuDivAll">
      <div className="accordionMenuDivInsideAll">
        <button className="accordionAll">
          <img className="accordionMenuIconAll" src="https://cdn-icons-png.flaticon.com/512/126/126122.png" alt=""></img>
          &nbsp; Men's Clothing
        </button>
        <div className="panelAll">
          <ul>
            <li>
              <a className="accordionItemAll">Men's Tshirt</a>
            </li>
            <li>
              <a className="accordionItemAll">Men's Jacket</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuAll;
