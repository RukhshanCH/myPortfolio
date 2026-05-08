import { useEffect, useRef } from "react";

const usePortfolioInteractions = () => {
  const scrollBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-links a");
    const fadeElements = document.querySelectorAll<HTMLElement>(".fade-up");

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

    // ================= INTERSECTION OBSERVER =================
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeElements.forEach((el) => observer.observe(el));

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

      observer.disconnect();
    };
  }, []);

  return {
    scrollBtnRef,
  };
};

export default usePortfolioInteractions;