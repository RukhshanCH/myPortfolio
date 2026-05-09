import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    FaWhatsapp,
    FaLinkedinIn,
    FaPlus,
    FaEnvelope,
} from "react-icons/fa";
import ContactIcon from "../assets/Chatbox-design.svg";

export default function FloatingContactButton() {
    const [open, setOpen] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    // CLOSE ON OUTSIDE CLICK
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    const socials = [
        {
            icon: <FaWhatsapp />,
            link: "https://wa.me/923000941566?text=Hi%20Rukhshan,%20I%20want%20to%20discuss%20a%20project.",
            className: "whatsapp",
            label: "WhatsApp",
        },
        {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/in/rukhshan-shahid-40bb27369/",
            className: "linkedin",
            label: "LinkedIn",
        },
        {
            icon: <FaEnvelope />,
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=ch.rukhshan@gmail.com&su=Hello&body=Enter%20your%20message%20here",
            className: "email",
            label: "Email",
        },
    ];

    return (
        <div
            className="floating-wrapper"
            ref={containerRef}
        >
            {/* SOCIALS */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="social-container"
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: 15,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                    >
                        {socials.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`social-btn ${social.className}`}
                                initial={{
                                    opacity: 0,
                                    scale: 0.7,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.4,
                                    y: 20,
                                }}
                                transition={{
                                    delay: index * 0.03,
                                    duration: 0.16,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                whileHover={{
                                    scale: 1.12,
                                    y: -2,
                                }}
                                whileTap={{
                                    scale: 0.92,
                                }}
                            >
                                {social.icon}

                                <span className="tooltip">
                                    {social.label}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MAIN BUTTON */}
            <motion.button
                className={`main-btn ${open ? "active" : ""}`}
                onClick={() => setOpen(!open)}
                whileTap={{ scale: 0.92 }}
                animate={{
                    rotate: open ? 135 : 0,
                }}
                transition={{
                    duration: 0.16,
                    ease: [0.4, 0, 0.2, 1],
                }}
            >

                <AnimatePresence mode="wait">

                    {open ? (
                        <motion.div
                            key="plus"
                            className="icon-wrapper"
                            initial={{
                                opacity: 0,
                                scale: 0.7,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.7,
                            }}
                            transition={{
                                duration: 0.12,
                            }}
                        >
                            <FaPlus />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            className="icon-wrapper"
                            initial={{
                                opacity: 0,
                                scale: 0.7,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.7,
                            }}
                            transition={{
                                duration: 0.12,
                            }}
                        >
                            <img
                                src={ContactIcon}
                                height={54}
                                width={54}
                                alt="contact"
                                className="main-icon"
                            />
                        </motion.div>
                    )}

                </AnimatePresence>

            </motion.button>
        </div>
    );
}