import React, { useRef } from 'react';
import { css, cx } from 'emotion';
import { Overlay } from './Subcomponents';
import { Link, useHistory } from 'react-router-dom';
import { motion, useMotionValue } from 'framer-motion';
import { useScrollConstraints, useWheelScroll } from './Utils';
import { CatList } from 'Components';

const openSpring = { type: 'spring', stiffness: 200, damping: 30 };
const closeSpring = { type: 'spring', stiffness: 300, damping: 35 };

const dismissDistance = 150;

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  > .card-content-container {
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    pointer-events: none;

    > .open-link {
      pointer-events: auto;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    > .card-content {
      position: relative;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      padding: 0 32px;
      user-select: none;
      pointer-events: auto;
      margin: 0 auto;

      background: #6b0f1a;
      background: linear-gradient(105deg, #6b0f1a 0%, #b91372 74%);

      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      box-shadow: 0px -2px 4px 4px #00000040;

      transition: height 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6), border-radius 0.5s ease-in-out;
    }

    &:hover > .card-content {
      height: 48px;
      cursor: pointer;
    }
  }

  > .card-content-container.open {
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1;
    overflow: hidden;
    padding: 32px 0;

    > .card-content {
      display: flex;
      flex-direction: column;
      height: auto;
      margin: auto;
      width: 1200px;
      overflow: hidden;

      border-radius: 15px;
    }
  }
`;

interface Props {
  isOpen: boolean;
}

// adapted from AppStore-like UI: https://www.framer.com/api/motion/examples/#ui-patterns
export const Scores: React.FC<Props> = ({ isOpen }) => {
  const { push } = useHistory();

  const y = useMotionValue(0);
  const zIndex = useMotionValue(isOpen ? 2 : 0);

  const checkSwipeToDismiss = () => y.get() > dismissDistance && push('/');
  const checkZIndex = () => (isOpen ? zIndex.set(2) : zIndex.set(0));

  const cardRef = useRef<HTMLDivElement>(null);
  const constraints = useScrollConstraints(cardRef, isOpen);

  const containerRef = useRef(null);
  useWheelScroll(containerRef, y, constraints, checkSwipeToDismiss, isOpen);

  return (
    <footer className={styles}>
      <Overlay isOpen={isOpen} />
      <div ref={containerRef} className={cx('card-content-container', isOpen && 'open')}>
        <motion.div
          ref={cardRef}
          className="card-content"
          style={{ zIndex, y }}
          layoutTransition={isOpen ? openSpring : closeSpring}
          drag={isOpen ? 'y' : false}
          dragConstraints={constraints}
          onDrag={checkSwipeToDismiss}
          onUpdate={checkZIndex}
        >
          {isOpen ? <CatList /> : <span>Scruter les scores</span>}
        </motion.div>
        {!isOpen && <Link to="/scores" className="open-link" />}
      </div>
    </footer>
  );
};
