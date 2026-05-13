import React, { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "UI/UX Architect",
  "React Expert",
  "Performance Geek",
];

const TypingEffect: React.FC = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => {
          setText(currentRole.substring(0, text.length + 1));
        }, 100);
      } else {
        // Wait before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentRole.substring(0, text.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span>
      {text}
      <span
        style={{
          // borderRight: "2px solid var(--primary)",
          marginLeft: "2px",
          animation: "blink 0.8s infinite",
        }}
      />
    </span>
  );
};

export default TypingEffect;