// import React, { useState } from "react";

// import "./App.css";
// import { useSpring, animated } from "react-spring";
// import { Toggle } from "./Toggle";
// import { Nav } from "./Nav";
// import { Checkout } from "./Checkout";

// function App() {
//   const [isNavOpen, setNavOpen] = useState(false);
//   const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
//   const navAnimation = useSpring({
//     transform: isNavOpen
//       ? `translate3d(0,0,0) scale(1) `
//       : `translate3d(100%,0,0) scale(0.2) `
//   });
//   console.log(fade);
//   return (
//     <animated.div className="App">
//       <header className="App-header">
//         <button className="menu-button" onClick={() => setNavOpen(!isNavOpen)}>
//           Menu
//         </button>
//         {/* <Nav style={navAnimation} /> */}
//         NAMBR
//         <div style={fade}>I will fade in</div>
//         <main>
//           <Toggle />
//           <Checkout isOpen={isNavOpen} />
//         </main>
//       </header>
//     </animated.div>
//   );
// }

// export default App;

import React, { useState } from "react";

import "./App.css";
import { useSpring, animated } from "react-spring";
import { Toggle } from "./Toggle";
import { Nav } from "./Nav";
import { Checkout } from "./Checkout";
import { Routes } from "./Routes";

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(100%,0,0) scale(0.6)`
  });
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">
          Menu
        </button>
        {/* <Nav style={navAnimation} /> */}
      </header>
      <main>
        {/* <Toggle /> */}
        <Routes />
      </main>
      <Checkout isOpen={isNavOpen} />
    </animated.div>
  );
};

export default App;
