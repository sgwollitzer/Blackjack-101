import React, {useEffect} from 'react';
import { animate, inView } from 'motion';

import arrowdown from '../images/arrowdown.png';
import './casinoInfo.css';
import aria from '../images/aria.jpg';
import excalibur from '../images/excalibur.jpg';
import foxwoods from '../images/foxwoods.jpg';
import luxor from '../images/luxor.jpg';
import mandalay from '../images/mandalay.jpg';
import mgm from '../images/mgm.jpg';
import venetian from '../images/venetian.jpg';
import winstar from '../images/winstar.jpg';
import { motion } from "framer-motion";



const CasinoInfo = () => {
   useEffect(() => {
      inView(".scrolling pre", (element) => {
        animate(
            element,
            { opacity: 1, x: [-100, 0] },
            {duration: 0.9,}
        )
        return () => animate(element, { opacity: 0, x: -100 })
      });
    }, []);
    useEffect(() => {
      inView(".scrollingRight pre", (element) => {
        animate(
            element,
            { opacity: 1, x: [100, 0] },
            {duration: 0.9,}
        )
        return () => animate(element, { opacity: 0, x: 100 })
      });
    }, []);
    // https://examples.motion.dev/js/scroll-triggered
  return (
    <>
    <div className="centered">
  <h1 className="big">Top Casinos for Blackjack</h1>
  <a href="#casino-section">
  <motion.img className="arrowdownimg" whileHover={{scale:1.5}} transition={{ type: "spring", bounce: 0.2 }}

    src={arrowdown}
    alt="scroll down to casino section"
  />

</a>
    </div>
    
    <div id="casino-section">

    <section className="scrolling">

  <pre><h1  className="big">Aria</h1></pre>
  </section>
  <section className="scrollingRight">
<pre>
  <img
    className="bigimg"
    src={aria}
    alt="aria casino"
  />
  </pre>
  </section>
   <section className="scrolling">
  <pre><h1  className="big">WinStar World Casino</h1></pre>
  </section>
  <section className="scrollingRight">
<pre>
  <img
    className="bigimg"
    src={winstar}
    alt="winstar world casino"
  />
  </pre>
  </section>
   <section className="scrolling">
 <pre> <h1  className="big">Venetian Macau</h1></pre>
  </section>
  <section className="scrollingRight">
<pre>
  <img
    className="bigimg"
    src={venetian}
    alt="venetian macau casino"
  />
  </pre>
  </section>
   <section className="scrolling">

  <pre><h1  className="big">Foxwoods Casino</h1></pre>
  </section>
  <section className="scrollingRight">
<pre>
  <img
    className="bigimg"
    src={foxwoods}
    alt="foxwoods casino"
  />
  </pre>
  </section>
 <section className="scrolling">
  <pre><h1  className="big">Excalibur</h1></pre>
  </section>
  <section className="scrollingRight">
<pre>
  <img
    className="bigimg"
    src={excalibur}
    alt="excalibur casino"
  />
  </pre>
  </section>
   <section className="scrolling">
  <pre><h1 className="big">MGM Grand</h1></pre>
  </section>
  <section className="scrollingRight">
<pre>
  <img
    className="bigimg"
    src={mgm}
    alt="mgm grand casino"
  />
  </pre>
  </section>
     <section className="scrolling">

  <pre><h1 className="big">Luxor Casino</h1></pre>
  </section>
  <section className="scrollingRight">
<pre>
  <img
    className="bigimg"
    src={luxor}
    alt="luxor casino"
  />
  </pre>
  </section>
       <section className="scrolling">

       <pre><h1  className="big">Mandalay Bay</h1></pre>
  </section>
  <section className="scrollingRight">
<pre>
  <img
    className="bigimg"
    src={mandalay}
    alt="mandalay bay casino"
  />
  </pre>
  </section>
  
  {/* https://vitamagazine.com/2024/06/09/blackjack-bliss-exploring-the-top-casinos-worldwide-for-blackjack-enthusiasts/ */}
 
  {/* https://www.blackjackhero.com/blackjack/casinos/ */}
    <motion.div className="redborder" whileHover={{scale:1.1}} transition={{ type: "spring", bounce: 0.5 }}>
  <a
  href="https://www.blackjackhero.com/blackjack/casinos/"
  target="_blank"
>Want to find a casino? Click here to see a running list of casinos in the US that offer blackjack</a>
  </motion.div>
  </div>
</>
  );
};

export default CasinoInfo;