import {
    useRef,
    useState,
    useLayoutEffect,
    useCallback,
    useEffect
  } from "react";
  import ResizeObserver from "resize-observer-polyfill";
  import {
    motion,
    useTransform,
    useSpring,
    useMotionValue
  } from "framer-motion";
  
  import { useScrollPercentage } from "react-scroll-percentage";
  
  const SmoothScroll = () => {
    const scrollRef = useRef(null);
    const ghostRef = useRef(null);
    const [scrollRange, setScrollRange] = useState(0);
    const [viewportW, setViewportW] = useState(0);
  
    const scrollPerc = useMotionValue(0);
  
    useLayoutEffect(() => {
      const element = scrollRef.current as unknown as HTMLElement;
      if (element) {
        setScrollRange(element.scrollWidth);
      }
    }, [scrollRef]);
    
  
    const onResize = useCallback((entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
        setViewportW(entry.contentRect.width);
      }
    }, []);
  
    useLayoutEffect(() => {
      const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => onResize(entries));
      if (ghostRef.current) {
        resizeObserver.observe(ghostRef.current);
        return () => resizeObserver.disconnect();
      }
    }, [onResize]);
    
  
  
    const [containerRef, percentage] = useScrollPercentage({
      /* Optional options */
      threshold: 0.1
    });
  
    useEffect(() => {
      scrollPerc.set(percentage);
    }, [percentage]);
  
    const transform = useTransform(
      scrollPerc,
      [0.1, 0.8],
      [0, -scrollRange + viewportW]
    );
    const physics = { damping: 1, mass: 0.20, stiffness: 2 };
    const spring = useSpring(transform, physics);
  
    return (
      <div ref={containerRef}>
        <div className="sticky top-0 left-0 right-0 will-change-transform">
          {percentage}
  
          <motion.section
            ref={scrollRef}
            style={{ x: spring }}
            className="relative h-screen w-screen flex items-center px-40 bg-yellow-500 border-40 border-yellowGreen"
          >
            <div className="relative flex border-20 bg-pink-500">
              <div className="h-screen w-screen border-15 bg-red-500">hello world 2</div>
              <div className="h-screen w-screen border-15 bg-green-500">Hello world 3</div>
            </div>
          </motion.section>
        </div>
        <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
      </div>
    );
  };
  
  export default SmoothScroll;

  