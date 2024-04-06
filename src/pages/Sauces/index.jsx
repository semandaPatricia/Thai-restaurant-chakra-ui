import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'


const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '100vw' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 0.5 }
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: 10
    }
  }
}
const Sauces = ({ addSauce, meal }) => {
  const sauces = ['Japan Teriyaki', 'Beijing Sauce', 'Thailand Padthai', 'Indonesia Satay', 'Burma Green Curry', 'Malay Coconut Curry'];

  return (
    <motion.div className="sauces container"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    style={{ height: '100vh', width: '100vw',  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      <h3>Step 3: Choose Your Sauce</h3>
      <ul>
        {sauces.map(sauce => (
          <motion.li key={sauce} onClick={() => addSauce(sauce)}
          whileHover={{ scale: 1.3, originX: 0,color: '#f8e112' }}
          transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className={meal.sauce === sauce ? 'active' : ''}>{sauce}</span>
          </motion.li>
        ))}
      </ul>
      {meal.sauce && (
        <motion.div className="next"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        >
          <Link to="/order">
          <motion.button
                variants={buttonVariants}
                whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Sauces;
