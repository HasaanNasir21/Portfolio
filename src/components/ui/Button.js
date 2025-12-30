import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "default", 
  children, 
  disabled,
  loading,
  ...props 
}, ref) => {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "text-dark-300 hover:text-white hover:bg-white/5 transition-colors",
    outline: "border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 hover:border-primary-500 transition-all duration-300"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus-visible disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {loading && (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </motion.button>
  );
});

Button.displayName = "Button";

export { Button };