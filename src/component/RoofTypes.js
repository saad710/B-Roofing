import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import slider1 from "../assets/roofType1.png";
import slider2 from "../assets/roofType2.png";
import slider3 from "../assets/roofType3.png";
import slider4 from "../assets/roofType4.png";

const RoofTypes = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  function roofMouseEnter(e) {
    e.target.style.height = "13rem";
    e.target.style.border = "1px solid black";
  }
  function roofMouseLeave(e) {
    e.target.style.height = "12rem";
    e.target.style.border = "none";
  }
  return (
    <div
      id="products"
      style={{ padding: `0 ${chevronWidth}px`, marginTop: "4rem" }}
    >
      <p
        style={{
          fontSize: "40px",
          textAlign: "center",
          color: "#393535",
          opacity: "1",
        }}
      >
        ROOF TYPES
      </p>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={2}
        leftChevron={
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              border: 0,
              padding: "0 8px",
            }}
          >
            {"<"}
          </button>
        }
        rightChevron={
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              border: 0,
              padding: "0 8px",
            }}
          >
            {">"}
          </button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <img
          onMouseEnter={roofMouseEnter}
          onMouseLeave={roofMouseLeave}
          style={{ height: "12rem" }}
          src={slider1}
          alt=""
          srcset=""
        />
        <img
          onMouseEnter={roofMouseEnter}
          onMouseLeave={roofMouseLeave}
          style={{ height: "12rem" }}
          src={slider2}
          alt=""
          srcset=""
        />
        <img
          onMouseEnter={roofMouseEnter}
          onMouseLeave={roofMouseLeave}
          style={{ height: "12rem" }}
          src={slider3}
          alt=""
          srcset=""
        />
        <img
          onMouseEnter={roofMouseEnter}
          onMouseLeave={roofMouseLeave}
          style={{ height: "12rem" }}
          src={slider4}
          alt=""
          srcset=""
        />
        <img
          onMouseEnter={roofMouseEnter}
          onMouseLeave={roofMouseLeave}
          style={{ height: "12rem" }}
          src={slider1}
          alt=""
          srcset=""
        />
        <img
          onMouseEnter={roofMouseEnter}
          onMouseLeave={roofMouseLeave}
          style={{ height: "12rem" }}
          src={slider2}
          alt=""
          srcset=""
        />
        <img
          onMouseEnter={roofMouseEnter}
          onMouseLeave={roofMouseLeave}
          style={{ height: "12rem" }}
          src={slider3}
          alt=""
          srcset=""
        />
      </ItemsCarousel>
    </div>
  );
};
export default RoofTypes;
