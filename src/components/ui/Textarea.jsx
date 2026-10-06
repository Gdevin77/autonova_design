const Textarea = ({ label, error, id, ...props }) => (
  <div className="space-y-1">
    <label htmlFor={id} className="block text-sm font-medium text-textPrimary">
      {label}
    </label>
    <textarea
      id={id}
      className="w-full rounded-lg border border-line bg-panel px-3 py-2 text-sm text-textPrimary placeholder:text-textMuted/70"
      {...props}
    />
    {error ? <p className="text-xs text-red-400">{error}</p> : null}
  </div>
);

export default Textarea;