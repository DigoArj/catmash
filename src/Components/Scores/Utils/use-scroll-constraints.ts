// from AppStore-like UI: https://www.framer.com/api/motion/examples/#ui-patterns
import React, { useState, useEffect } from 'react';
import useResizeObserver from 'use-resize-observer';

interface Constraints {
  top: number;
  bottom: number;
}

/**
 * Calculate the top/bottom scroll constraints of a full-screen element vs the viewport
 */
export const useScrollConstraints = (ref: React.RefObject<HTMLDivElement>, measureConstraints: boolean): Constraints => {
  const [constraints, setConstraints] = useState<Constraints>({
    top: 0,
    bottom: 0,
  });

  const { height } = useResizeObserver({ ref });

  useEffect(() => {
    if (!measureConstraints) return;

    const element = ref.current;
    if (!element) return;

    const viewportHeight = window.innerHeight;
    const contentTop = element.offsetTop;
    const contentHeight = element.offsetHeight;
    const scrollableViewport = viewportHeight - contentTop * 2;
    const top = Math.min(scrollableViewport - contentHeight, 0);

    setConstraints({ top, bottom: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [measureConstraints, height]);

  return constraints;
};
