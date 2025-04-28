import React from 'react';
import './Buttons.css';
import { motion } from "framer-motion";

const Buttons = ({press}) => {
  return (
    <div className="buttons">
        <motion.div whileTap={{ scale: 1.5, rotate: 3,  boxShadow: '7px 7px 7px rgb(36, 78, 41)'}} whileHover={{scale:1.1}} transition={{ type: "spring", bounce: 0.5 }}>
      <button className="Sbutton" onClick={() => press('new game')}>New Game</button> </motion.div>
      <motion.div whileTap={{ scale: 1.5, rotate: -3,  boxShadow: '7px 7px 7px rgb(36, 78, 41)'}} whileHover={{scale:1.1}} transition={{ type: "spring", bounce: 0.5 }}>
      <button className="Sbutton" onClick={() => press('hit')}>Hit</button></motion.div>
      <motion.div whileTap={{ scale: 1.5, rotate: 3,  boxShadow: '7px 7px 7px rgb(36, 78, 41)'}} whileHover={{scale:1.1}} transition={{ type: "spring", bounce: 0.5 }}>
      <button className="Sbutton" onClick={() => press('stand')}>Stand</button></motion.div>
      {/* <button onClick={() => press('split')}>Split</button> */}
    </div>
  );
};

export default Buttons;