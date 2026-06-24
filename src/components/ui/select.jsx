import * as React from "react";
import { cn } from "../../lib/utils";

const Select = React.forwardRef(({ className, value, onChange, options = [], placeholder, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <select
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          "flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-950/50 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-500 focus-visible:border-pink-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all appearance-none cursor-pointer pr-10",
          className
        )}
        ref={ref}
        {...props}
      >
        {placeholder && (
          <option value="" disabled className="bg-neutral-950 text-neutral-500">
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-neutral-950 text-neutral-100">
            {opt.label || opt.value}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-neutral-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 11L3 6h10l-5 5z" />
        </svg>
      </div>
    </div>
  );
});
Select.displayName = "Select";

export { Select };
