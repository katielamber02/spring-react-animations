// import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";

// export const Checkout = ({ isOpen }) => {
//   const animation = useSpring({
//     transform: isOpen ? `translate3d(0,0,0)  ` : `translate3d(100%,0,0)  `
//   });
//   return (
//     <div className="checkout">
//       <animated.div style={animation} className="checkout-left"></animated.div>
//       <animated.div style={animation} className="checkout-right"></animated.div>
//     </div>
//   );
// };

import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export const Checkout = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 0 : 100
  });
  return (
    <div
      className="checkout"
      style={{
        pointerEvents: isOpen ? "all" : "none"
      }}
    >
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x * -1}%,0,0)`)
        }}
        className="checkout-left"
      ></animated.div>
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
        }}
        className="checkout-right"
      ></animated.div>
      {/*  <animated.div style={animation} className="checkout-right"></animated.div> */}
    </div>
  );
};
