"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  type?: "success" | "info";
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose, type = "success" }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          className="fixed bottom-10 left-1/2 z-[200] flex items-center gap-3 bg-accent text-white px-6 py-4 rounded-2xl shadow-2xl min-w-[300px] border border-white/10"
        >
          <div className="flex-shrink-0 text-secondary">
            <CheckCircle size={20} />
          </div>
          <p className="text-sm font-medium flex-1">{message}</p>
          <button 
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
