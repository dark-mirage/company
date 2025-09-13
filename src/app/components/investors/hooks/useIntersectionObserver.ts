"use client";
import { useEffect, useRef, useState, RefObject } from "react";

const useIntersectionObserver = (): [RefObject<HTMLElement | null>, boolean] => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // если хочешь один раз — можно отключать тут:
        if (entry.isIntersecting) observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, isVisible];
};

export default useIntersectionObserver;
