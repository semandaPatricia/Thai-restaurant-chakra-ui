import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ meal }) => {
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 4000);

  // Ensure meal object is initialized with a default value
  const defaultMeal = { base: "", toppings: [], sauce: "" };
  const { base, toppings, sauce } = meal || defaultMeal;

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showTitle && (
          <motion.h2  exit={{ y: -1000 }}>Thank you for your order.</motion.h2>
        )}
      </AnimatePresence>

      <motion.p variants={childVariants}>You ordered {base} with:</motion.p>
      <ul>
        {toppings && toppings.length > 0 ? (
          toppings.map((topping, index) => (
            <li key={index}>Topping: {topping}</li>
          ))
        ) : (
          <li>No toppings selected</li>
        )}
      </ul>
      <motion.p variants={childVariants}>
        Sauce: {sauce || "No sauce selected"}
      </motion.p>
    </motion.div>
  );
};

export default Order;
