import * as React from "react";
import { Input } from "./input";

const InputNumber = React.forwardRef(({ value, onChange, min, max, className, ...props }, ref) => {
  return (
    <Input
      type="number"
      value={value === undefined || value === null ? "" : value}
      min={min}
      max={max}
      onChange={(e) => {
        const val = e.target.value === "" ? 0 : Number(e.target.value);
        onChange?.(val);
      }}
      className={className}
      ref={ref}
      {...props}
    />
  );
});
InputNumber.displayName = "InputNumber";

export { InputNumber };
