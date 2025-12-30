import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-primary-500/20 text-primary-300 border-primary-500/30",
    secondary: "bg-secondary-500/20 text-secondary-300 border-secondary-500/30",
    success: "bg-green-500/20 text-green-300 border-green-500/30",
    warning: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    error: "bg-red-500/20 text-red-300 border-red-500/30",
    outline: "border-dark-600 text-dark-300 hover:bg-dark-700/50",
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      whileHover={{ scale: 1.05 }}
      {...props}
    />
  );
});

Badge.displayName = "Badge";

export { Badge };