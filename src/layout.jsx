import React from 'react';
import { motion } from 'framer-motion';
import { Route } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <motion.div
      style={{ backgroundColor: '#D5F1D9 ', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'   }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
