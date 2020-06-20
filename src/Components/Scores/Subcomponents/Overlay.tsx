// from AppStore-like UI: https://www.framer.com/api/motion/examples/#ui-patterns
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { css } from 'emotion';

const styles = css`
  z-index: 1;
  background: #000c;
  will-change: opacity;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;

  > a {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100vw;
  }
`;

interface Props {
  isOpen: boolean;
}

export const Overlay: React.FC<Props> = ({ isOpen }) => (
  <motion.div
    className={styles}
    initial={false}
    animate={{ opacity: isOpen ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
  >
    <Link to="/" />
  </motion.div>
);
