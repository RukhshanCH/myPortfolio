import { useEffect, useRef } from "react";

const usePortfolioInteractions = () => {
  const scrollBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-links a");

    // ================= ACTIVE SECTION =================
    const updateActiveSection = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute("id") || "";
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    // ================= SCROLL EVENT =================
    const handleScroll = () => {
      updateActiveSection();

      const btn = scrollBtnRef.current;

      if (btn) {
        if (window.scrollY > 500) {
          btn.classList.add("show");
        } else {
          btn.classList.remove("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // ================= SCROLL TO TOP =================
    const handleScrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    scrollBtnRef.current?.addEventListener("click", handleScrollTop);
    
    // init
    updateActiveSection();

    // ================= CLEANUP =================
    return () => {
      window.removeEventListener("scroll", handleScroll);

      scrollBtnRef.current?.removeEventListener(
        "click",
        handleScrollTop
      );

    };
  }, []);

  return {
    scrollBtnRef,
  };
};

export default usePortfolioInteractions;