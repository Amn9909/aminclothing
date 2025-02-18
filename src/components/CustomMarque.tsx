"use client";

import { motion } from "framer-motion";

export interface CategoyDetail {
    title : string
}

interface MarqueProps {
  MarqueDataObj: CategoyDetail[];
}

const CustomMarque = ({ MarqueDataObj }: MarqueProps) => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-800 text-white py-2">
      <motion.div
        className="flex space-x-8 text-xl font-bold"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {MarqueDataObj.map((cat: any) => (
          <span>🔥 {cat.intitle}</span>
        ))}
      </motion.div>
    </div>
  );
};

export default CustomMarque;
