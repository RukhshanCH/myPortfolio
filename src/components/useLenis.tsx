import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      autoToggle: true,
      anchors: true,
      allowNestedScroll: true,
      naiveDimensions: true,
      stopInertiaOnNavigate: true,
    });

    // Optional: expose for debugging
    ;(window as any).lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);
}