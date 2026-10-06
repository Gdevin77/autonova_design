import { forwardRef } from "react";

const Input = forwardRef(({ label, error, id, ...props }, ref) => (
  <div className="space-y-1">
    <label htmlFor={id} className="block text-sm font-medium text-textPrimary">
      {label}
    </label>
    <input
      id={id}
      ref={ref}
      className="w-full rounded-lg border border-line bg-panel px-3 py-2 text-sm text-textPrimary placeholder:text-textMuted/70"
      {...props}
    />
    {error ? <p className="text-xs text-red-600">{error}</p> : null}
  </div>
));

export default Input;