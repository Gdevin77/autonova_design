import { forwardRef } from "react";

const Select = forwardRef(({ label, error, id, options, ...props }, ref) => (
  <div className="space-y-1">
    <label htmlFor={id} className="block text-sm font-medium text-textPrimary">
      {label}
    </label>
    <select id={id} ref={ref} className="w-full rounded-lg border border-line bg-panel px-3 py-2 text-sm text-textPrimary" {...props}>
      {options.map((option) => {
        const normalized = typeof option === "string" ? { label: option || "Select an option", value: option } : option;
        return (
          <option key={`${id}-${normalized.value || "empty"}`} value={normalized.value}>
            {normalized.label}
          </option>
        );
      })}
    </select>
    {error ? <p className="text-xs text-red-600">{error}</p> : null}
  </div>
));

export default Select;
