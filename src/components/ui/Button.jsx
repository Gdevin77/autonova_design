import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

const styles = {
  primary: "bg-accent text-white hover:bg-accentSoft",
  outline: "border border-accent text-accent hover:bg-accent hover:text-white",
  ghost: "bg-panel text-textPrimary hover:bg-surface"
};

const base = "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200";

const Button = ({ as = "button", to, href, variant = "primary", className, children, ...props }) => {
  const classes = cn(base, styles[variant], className);

  if (as === "link") {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (as === "a") {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;