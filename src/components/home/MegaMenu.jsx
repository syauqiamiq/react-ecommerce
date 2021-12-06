/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

const MegaMenu = () => {
  useEffect(() => {
    MegaMenu();
  }, []);
  const MegaMenu = () => {
    let acc = document.getElementsByClassName("accordion");
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
    <div className="accordionMenuDiv">
      <div className="accordionMenuDivInside">
        <button className="accordion">
          <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/126/126122.png" alt=""></img>
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a className="accordionItem">Men's Tshirt</a>
            </li>
            <li>
              <a className="accordionItem">Men's Jacket</a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/126/126122.png" alt=""></img>
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a className="accordionItem">Men's Tshirt</a>
            </li>
            <li>
              <a className="accordionItem">Men's Jacket</a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/126/126122.png" alt=""></img>
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a className="accordionItem">Men's Tshirt</a>
            </li>
            <li>
              <a className="accordionItem">Men's Jacket</a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/126/126122.png" alt=""></img>
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a className="accordionItem">Men's Tshirt</a>
            </li>
            <li>
              <a className="accordionItem">Men's Jacket</a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/126/126122.png" alt=""></img>
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a className="accordionItem">Men's Tshirt</a>
            </li>
            <li>
              <a className="accordionItem">Men's Jacket</a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/126/126122.png" alt=""></img>
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a className="accordionItem">Men's Tshirt</a>
            </li>
            <li>
              <a className="accordionItem">Men's Jacket</a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/126/126122.png" alt=""></img>
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a className="accordionItem">Men's Tshirt</a>
            </li>
            <li>
              <a className="accordionItem">Men's Jacket</a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/126/126122.png" alt=""></img>
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a className="accordionItem">Men's Tshirt</a>
            </li>
            <li>
              <a className="accordionItem">Men's Jacket</a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/126/126122.png" alt=""></img>
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a className="accordionItem">Men's Tshirt</a>
            </li>
            <li>
              <a className="accordionItem">Men's Jacket</a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/126/126122.png" alt=""></img>
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a className="accordionItem">Men's Tshirt</a>
            </li>
            <li>
              <a className="accordionItem">Men's Jacket</a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/126/126122.png" alt=""></img>
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a className="accordionItem">Men's Tshirt</a>
            </li>
            <li>
              <a className="accordionItem">Men's Jacket</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
