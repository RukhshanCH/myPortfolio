import { motion, type HTMLMotionProps } from "framer-motion";

type RevealSectionProps = HTMLMotionProps<"section">;

const RevealSection = ({ children, ...props }: RevealSectionProps) => {
    return (
        <motion.section
            {...props}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    );
};

export default RevealSection;
