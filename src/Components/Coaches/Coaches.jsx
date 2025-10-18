import React from "react";
import "./Coaches.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { coachesData } from "../../data/coachesData";
import { useState } from "react";
import { motion } from "framer-motion";
const Coaches = () => {
  const [selected, setSelected] = useState(0);
  const cLength = coachesData.length;
  const transition = { type: "spring", duration: 1 };
  return (
    <div className="coaches" id="coaches" >
      <div className="left-c">
        <span>Coaches</span>
        <span className="stroke-text">Meet our</span>
        <span>expert trainers</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {coachesData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {coachesData[selected].name}
          </span>{" "}
          - {coachesData[selected].status}
        </span>
      </div>
      <div className="right-c">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={coachesData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img
            src={leftArrow}
            alt=""
            onClick={() => {
              selected === 0
                ? setSelected(cLength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />{" "}
          <img
            src={rightArrow}
            alt=""
            onClick={() => {
              selected === cLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Coaches;
