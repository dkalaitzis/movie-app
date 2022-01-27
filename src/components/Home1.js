import { motion } from "framer-motion"
import React from 'react';

export const Home1 = () => (
    <div className="container"> 
  <motion.div className="home1"
    animate = {{ x:100, opacity: 1 }}
    transition={{ type: "tween", stiffness: 100 }}
    initial= {{ opacity: 0 }}
  >
      <h2>Hello Friends</h2>

  </motion.div>
  <motion.div className="home2"
    animate = {{ x:50, opacity: 1 }}
    transition={{ type: "tween", stiffness: 100, delay: 0.2}}
    initial= {{ opacity: 0 }}
  >
      <h2>Hey</h2>

  </motion.div>
  </div>

)

export default Home1;