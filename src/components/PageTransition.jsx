import { motion, useReducedMotion } from "framer-motion";
import { pageVariants } from "../motion";

export default function PageTransition({ children }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className="page-transition">{children}</div>;
  }

  return (
    <motion.div
      className="page-transition"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
